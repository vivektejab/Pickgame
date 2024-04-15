const { JSDOM } = require('jsdom');
const fs = require('fs');
const { exec } = require('child_process');

exec('http-server -p 3000');

const htmlContent = fs.readFileSync('index.html', 'utf8');
const { window } = new JSDOM(htmlContent);

global.window = window;
global.document = window.document;

const scriptContent = fs.readFileSync('script.js', 'utf8');

const scriptEl = document.createElement('script');
scriptEl.textContent = scriptContent;
document.body.appendChild(scriptEl);
