import { lstatSync, readdirSync } from "fs";
import { resolve } from "path";
import { buildGenerator, getProgramFromFiles } from "typescript-json-schema";
import _VAPI from "../dist/src/index.js";
import { argParams } from "./testOptions.js";
const methodBlacklist = ["initUtils", "constructor", "parseBody", "fetch", "validateArgs"];
const methods = Object.getOwnPropertyNames(_VAPI.prototype).filter(m => !methodBlacklist.includes(m));
methods.forEach(method => {
    if (!argParams[method])
        throw new Error(`Method "${method}" is missing in argParams!`);
});
const readDir = (dir) => {
    const files = [];
    readdirSync(dir).forEach(file => {
        const filePath = `${dir}/${file}`;
        if (lstatSync(filePath).isDirectory()) {
            files.push(...readDir(filePath));
        }
        if (!filePath.endsWith(".ts"))
            return;
        files.push(resolve(filePath));
    });
    return files;
};
const program = getProgramFromFiles(readDir("./src/types"));
const generator = buildGenerator(program);
console.log(generator.getSchemaForSymbol("RawCompetitiveUpdatesResponse").properties);
//# sourceMappingURL=test.js.map