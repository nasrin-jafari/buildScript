const fs = require("fs");
const path = require("path");

const versionFilePath = path.join(__dirname, "..", "..", "src", "version.ts");
const versionFile = fs.readFileSync(versionFilePath, "utf-8");

const versionMatch = versionFile.match(/VERSION_NUMBER\s*=\s*["'`](.*?)["'`]/);

if (!versionMatch) {
  console.error("❌ VERSION_NUMBER not found in version.ts");
  process.exit(1);
}

const versionNumber = versionMatch[1];
const packageJsonPath = path.join(__dirname, "..", "..", "package.json");

const packageJsonRaw = fs.readFileSync(packageJsonPath, "utf-8");
const packageJson = JSON.parse(packageJsonRaw);

packageJson.version = versionNumber;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf-8");

console.log(`✅ package.json updated to version ${versionNumber}`);
