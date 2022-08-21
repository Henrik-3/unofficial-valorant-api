import Ajv, { type ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import chalk from "chalk";
import { lstatSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { buildGenerator, getProgramFromFiles, type CompilerOptions, type Definition } from "typescript-json-schema";
import _VAPI from "../dist/src/index.js";
import { argParams as _argParams } from "./testOptions.js";

// Add aliases to argParams
const argParams: {
    [method: string]: {
        args?: { [name: string]: any };
        type: string;
        aliases?: string[];
    };
} = Object.keys(_argParams).reduce((acc, cur) => {
    const aliases = _argParams[cur].aliases;
    if (aliases) {
        aliases.forEach(alias => {
            acc[alias] = _argParams[cur];
        });
    }
    acc[cur] = _argParams[cur];
    return acc;
}, {});

// Init AJV
const ajv = new Ajv();
addFormats(ajv);

// Init VAPI
const VAPI = new _VAPI();

const methodBlacklist = ["initUtils", "constructor", "parseBody", "fetch", "validateArgs"];
const methods = Object.getOwnPropertyNames(_VAPI.prototype).filter(m => !methodBlacklist.includes(m));
methods.forEach(method => {
    if (!argParams[method]) throw new Error(`Method "${method}" is missing in argParams!`);
});

const readDir = (dir: string) => {
    const files = [];
    readdirSync(dir).forEach(file => {
        const filePath = `${dir}/${file}`;
        if (lstatSync(filePath).isDirectory()) {
            files.push(...readDir(filePath));
        }
        if (!filePath.endsWith(".ts")) return;
        files.push(resolve(filePath));
    });
    return files;
};

console.log(chalk.green("Getting already checked methods") + chalk.green("..."));

let checked: string[] = [];
try {
    checked = JSON.parse(readFileSync("./test/checked.txt", "utf-8")) || [];
// eslint-disable-next-line no-empty
} catch {}

if (checked.length === methods.length) {
    console.log();
    console.log(chalk.red("Exiting due to all methods being checked! Delete"), chalk.redBright("./checked.txt"), chalk.red("to re-do tests"));
    process.exit();
}

console.log(chalk.green("Setting up"), chalk.gray("typescript-json-schema") + chalk.green("..."));

const compilerOptions: CompilerOptions = {
    strict: true
};

const program = getProgramFromFiles(readDir("./src/types"), compilerOptions);
const generator = buildGenerator(program);

const checkDefinition = (data: any, type: string): [valid: boolean, res: ValidateFunction, rawSchema: Definition] => {
    const definition = generator.getSchemaForSymbol(type);
    const validate = ajv.compile(definition);
    return [validate(data), validate, definition];
};

for (const method of methods) {
    if (checked.includes(method)) {
        console.log();
        console.log(chalk.blue("Already checked"), chalk.blue.bold(method), chalk.blue(", skipping to next method."));
        continue;
    }

    const args = argParams[method].args;
    const type = argParams[method].type;

    console.log();
    console.log(chalk.blue.bold(`Testing method "${method}"`));
    console.log(chalk.gray("-"), chalk.blue.bold("Args:"), args);
    console.log(chalk.gray("-"), chalk.blue.bold("Expected type:"), chalk.green(type));

    let response: any;
    try {
        response = await (VAPI[method](args));
    } catch {
        console.log(chalk.red.bold("Args are incorrect! Please check your test options!"));
        break;
    }
    console.log(chalk.green("Checking definition..."));

    // eslint-disable-next-line prefer-const
    let [valid, res, rawSchema] = checkDefinition(response.data, type);

    // ? Fix issue with Buffer type
    if (!valid && res.errors?.[0]?.params?.additionalProperty === "readBigUInt64LE") valid = true;

    if (valid) {
        console.log(chalk.greenBright.bold("Passed!"));
        checked.push(method);
    } else {
        console.log(chalk.red.bold("Errors with the returned data!"));
        res.errors.forEach((error, i) => {
            console.log(chalk.gray("-"), chalk.red(`Error #${i}`));
            console.log(error);
        });
        writeFileSync("./test/out.txt", JSON.stringify(response, null, 4) + "\n\nRAW SCHEMA:\n" + JSON.stringify(rawSchema, null, 4));
        console.log(chalk.red("Ending due to error... Wrote response and raw schema to"), chalk.redBright("./out.txt"));
        break;
    }

    console.log(chalk.green("Done checking definition!"));
}

console.log();
console.log(chalk.green("Writing checked methods to"), chalk.greenBright("./checked.txt") + chalk.green("..."));
writeFileSync("./test/checked.txt", JSON.stringify(checked));
