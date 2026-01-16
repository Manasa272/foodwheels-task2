const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const templatesPath = path.join(__dirname, 'src', 'templates');
const distPath = path.join(__dirname, 'dist');

nunjucks.configure(templatesPath, { autoescape: true });

const output = nunjucks.render('index.njk');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, 'index.html'), output);

console.log('✅ Build completed: dist/index.html created');
