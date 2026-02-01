#!/usr/bin/env node

/**
 * Static Site Scaffolding Script
 * 
 * @description Create a new static website with JGFall toolkit
 * @author Jackson Fall
 */

const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Error: Please provide a project name');
  console.log('Usage: node create-static-site.js <project-name>');
  process.exit(1);
}

console.log('🚀 Creating Static Site with JGFall Toolkit\n');

const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`❌ Error: Directory '${projectName}' already exists`);
  process.exit(1);
}

fs.mkdirSync(projectPath);

// Create directories
const dirs = ['css', 'js', 'images', 'fonts'];
dirs.forEach(dir => {
  fs.mkdirSync(path.join(projectPath, dir));
});

// Create files
const files = {
  'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${projectName}">
    <title>${projectName}</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav>
            <h1>${projectName}</h1>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h2>Welcome to ${projectName}</h2>
            <p>Built with JGFall Dev Toolkit</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 ${projectName}. All rights reserved.</p>
    </footer>
    
    <script src="js/main.js"></script>
</body>
</html>
`,
  'css/styles.css': `/* ${projectName} - Styles */

:root {
  --primary-color: #0066cc;
  --secondary-color: #6c757d;
  --text-color: #333;
  --bg-color: #ffffff;
  --spacing-unit: 1rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background: var(--bg-color);
}

header {
  background: var(--primary-color);
  color: white;
  padding: 1rem 0;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

footer {
  background: #f8f9fa;
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
}
`,
  'js/main.js': `// ${projectName} - Main JavaScript

console.log('${projectName} initialized');

// Add your JavaScript here
`,
  '.gitignore': `.DS_Store
Thumbs.db
*.log
node_modules/
dist/
.env
`,
  'README.md': `# ${projectName}

A static website built with JGFall Dev Toolkit.

## Getting Started

Simply open \`index.html\` in your browser, or use a local server:

\`\`\`bash
# Python
python -m http.server 8000

# Node.js
npx serve
\`\`\`

## Project Structure

\`\`\`
${projectName}/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
└── README.md
\`\`\`

## Deployment

Deploy to GitHub Pages, Netlify, or any static host.
`
};

for (const [filePath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(projectPath, filePath), content);
}

console.log('✅ Project created successfully!');
console.log(`\n📁 Project location: ${projectPath}`);
console.log('\n📝 Next steps:');
console.log(`   cd ${projectName}`);
console.log('   open index.html');
console.log('');
