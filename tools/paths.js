const path = require('path');

const ROOT = path.join(process.cwd());

module.exports = {
  SRC: path.join(ROOT, 'src'),
  BUILD: path.join(ROOT, 'build'),
  NODE_MODULES: path.join(ROOT, 'node_modules'),
};
