import { readFileSync, renameSync, writeFileSync } from "fs";
const path = "./doc/classes/index.default.md";
const newPath = "./doc/README.md";
const file = readFileSync(path, "utf-8");
const lines = file.split("\n");
const newLines = [...lines];
lines.forEach((line, i) => {
    const header = line.split(" ")[0];
    if (header === "#") {
        newLines[i] = "# Welcome to the VAPI docs";
        newLines[i + 2] = "Below is a list of all the properties of the API including all properties and methods. If you need any help, join the [Discord server](https://discord.gg/wXNMnqzvAD)";
    }
    if (header !== "###")
        return;
    const name = line.split(" ")[1];
    if (name !== "mapImages" && name !== "rankImages")
        return;
    let typeIndex = i + 1;
    while (lines[typeIndex].split(" ")[0] !== "####")
        typeIndex++;
    typeIndex++;
    while (lines[typeIndex].split(" ")[0] !== "####") {
        const key = lines[typeIndex].split("|")[1]?.trim()?.slice(1, -1);
        const type = lines[typeIndex].split("|")[2]?.trim()?.slice(1, -1);
        if (!key || !type) {
            typeIndex++;
            continue;
        }
        if (type === "string") {
            newLines[typeIndex] = null;
        }
        typeIndex++;
    }
});
writeFileSync(path, newLines.filter(line => line !== null).map(line => (line
    ?.replaceAll("../", "./")
    ?.replaceAll("index.default.md", "README.md"))).join("\n"));
renameSync(path, newPath);
//# sourceMappingURL=editDocs.js.map