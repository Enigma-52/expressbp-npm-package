#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'boilerplate');
const outputDir = process.argv[2] || 'my-express-app';

function generateBoilerplate() {
  fs.mkdirSync(outputDir);

  function generateFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const relativePath = path.relative(templateDir, filePath);
      const outputPath = path.join(outputDir, relativePath);

      if (fs.statSync(filePath).isDirectory()) {
        fs.mkdirSync(outputPath);
        generateFiles(filePath);
      } else {
        const content = fs.readFileSync(filePath, 'utf-8');
        const replacedContent = content.replace(/{{appName}}/g, outputDir);

        fs.writeFileSync(outputPath, replacedContent, 'utf-8');
      }
    });
  }

  generateFiles(templateDir);
  console.log(`Boilerplate generated in ${outputDir}`);
}

generateBoilerplate();
