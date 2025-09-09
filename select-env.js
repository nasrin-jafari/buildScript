const { configsEnv } = require("../config.js");
const fs = require("fs");
const path = require("path");
const { Default, ...restConfig } = configsEnv;
const choices = Object.keys(restConfig);
let selected = 0;
const render = () => {
  process.stdout.write("\x1B[2J\x1B[0f");
  console.log("Select build environment:\n");
  choices.forEach((choice, index) => {
    if (index === selected) {
      console.log(`> \x1b[36m${choice}\x1b[0m`);
    } else {
      console.log(`  ${choice}`);
    }
  });
};

const saveEnv = () => {
  const filePath = path.join(__dirname, "..", "..", ".env");
  
  let content = "";
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf8");
  }

  const lines = content.split("\n").filter(Boolean);
  let updated = false;
  const newLines = lines.map((line) => {
    if (line.startsWith("BUILD_ENV=")) {
      updated = true;
      return `BUILD_ENV=${choices[selected]}`;
    }
    return line;
  });

  if (!updated) {
    newLines.push(`BUILD_ENV=${choices[selected]}`);
  }

  fs.writeFileSync(filePath, newLines.join("\n") + "\n");

  console.log(`\n✅ Environment "${choices[selected]}" saved to .env`);
  process.exit();
};

const handleKeyPress = (buffer) => {
  const key = buffer.toString();

  if (key === "\u001B[A") {
    selected = (selected - 1 + choices.length) % choices.length;
    render();
  } else if (key === "\u001B[B") {
    selected = (selected + 1) % choices.length;
    render();
  } else if (key === "\r") {
    saveEnv();
  } else if (key === "\u0003") {
    process.exit();
  }
};

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", handleKeyPress);

render();
