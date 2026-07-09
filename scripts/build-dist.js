const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const overridesPath = path.join(repoRoot, 'paragon', '_overrides.scss');
const distDir = path.join(repoRoot, 'dist');

function shortenHexColors(css) {
  return css.replace(/#[0-9a-fA-F]{6}\b/g, (hex) => {
    const value = hex.toLowerCase();
    const [, r1, r2, g1, g2, b1, b2] = value;

    if (r1 === r2 && g1 === g2 && b1 === b2) {
      return `#${r1}${g1}${b1}`;
    }

    return value;
  });
}

function buildExpandedCoreCss(source) {
  const importLines = source
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.startsWith('@import '));
  const rootStart = source.indexOf(':root');

  if (rootStart === -1) {
    throw new Error(`Could not find a :root block in ${overridesPath}`);
  }

  const rootCss = source
    .slice(rootStart)
    .split(/\r?\n/)
    .map(line => line.replace(/\s+$/u, ''))
    .filter(line => line.trim() !== '' && !line.trim().startsWith('//'))
    .join('\n')
    .trim();

  return `${[...importLines, rootCss].join('\n')}\n`;
}

function minifyCss(css) {
  return `${shortenHexColors(css)
    .replace(/\s+/gu, ' ')
    .replace(/\s*\{\s*/gu, '{')
    .replace(/\s*\}\s*/gu, '}')
    .replace(/\s*;\s*/gu, ';')
    .replace(/\s*:\s*/gu, ':')
    .replace(/\s*,\s*/gu, ',')
    .replace(/;\}/gu, '}')
    .trim()}\n`;
}

const overridesSource = fs.readFileSync(overridesPath, 'utf8');
const coreCss = buildExpandedCoreCss(overridesSource);

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'core.css'), coreCss);
fs.writeFileSync(path.join(distDir, 'core.min.css'), minifyCss(coreCss));
fs.writeFileSync(path.join(distDir, 'light.css'), '@import "./core.css";\n');
fs.writeFileSync(path.join(distDir, 'light.min.css'), '@import "./core.min.css";\n');
