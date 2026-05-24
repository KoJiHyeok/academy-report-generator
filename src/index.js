const fs = require("fs");
const path = require("path");
const { parseCSV } = require("./csvParser");
const { generateReports } = require("./reportGenerator");

const rootDir = path.join(__dirname, "..");

const inputArg = process.argv[2];

const csvPath = inputArg
  ? path.resolve(process.cwd(), inputArg)
  : path.join(rootDir, "sample-data", "scores.csv");

const templatePath = path.join(rootDir, "templates", "parent-message.md");
const outputDir = path.join(rootDir, "output");
const outputPath = path.join(outputDir, "messages.txt");

function main() {
  if (!fs.existsSync(csvPath)) {
    console.error("CSV file not found:", csvPath);
    process.exit(1);
  }

  if (!fs.existsSync(templatePath)) {
    console.error("Template file not found:", templatePath);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const templateContent = fs.readFileSync(templatePath, "utf-8");

  const students = parseCSV(csvContent);

  if (students.length === 0) {
    console.log("No student rows found.");
    return;
  }

  const reports = generateReports(templateContent, students);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(outputPath, reports, "utf-8");

  console.log(`Generated ${students.length} report(s).`);
  console.log(`Input: ${csvPath}`);
  console.log(`Output: ${outputPath}`);
}

main();
