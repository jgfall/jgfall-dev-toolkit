#!/usr/bin/env node

/**
 * React App Scaffolding Script
 * 
 * @description Create a new React app with JGFall toolkit integration
 * @author Jackson Fall
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Error: Please provide a project name');
  console.log('Usage: node create-react-app.js <project-name>');
  process.exit(1);
}

console.log('🚀 Creating React App with JGFall Toolkit\n');

// Create project directory
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`❌ Error: Directory '${projectName}' already exists`);
  process.exit(1);
}

fs.mkdirSync(projectPath);
process.chdir(projectPath);

console.log('📦 Initializing npm project...');
execSync('npm init -y', { stdio: 'inherit' });

console.log('📥 Installing dependencies...');
execSync('npm install react react-dom', { stdio: 'inherit' });
execSync('npm install -D vite @vitejs/plugin-react', { stdio: 'inherit' });

console.log('📁 Creating project structure...');

// Create directories
const dirs = [
  'src',
  'src/components',
  'src/pages',
  'src/hooks',
  'src/utils',
  'src/styles',
  'public'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
});

// Create files
const files = {
  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
  'src/App.jsx': `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ${projectName}</h1>
        <p>Built with JGFall Dev Toolkit</p>
      </header>
    </div>
  );
}

export default App;
`,
  'src/App.css': `.App {
  text-align: center;
}

.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
`,
  'src/styles/index.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`,
  'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
`,
  '.gitignore': `# Dependencies
node_modules/

# Production
dist/
build/

# Environment
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo
.DS_Store

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,
  'README.md': `# ${projectName}

Created with JGFall Dev Toolkit

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
`
};

for (const [filePath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(projectPath, filePath), content);
}

// Update package.json with scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts = {
  dev: 'vite',
  build: 'vite build',
  preview: 'vite preview'
};
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('\n✅ Project created successfully!');
console.log(`\n📁 Project location: ${projectPath}`);
console.log('\n📝 Next steps:');
console.log(`   cd ${projectName}`);
console.log('   npm run dev');
console.log('');
