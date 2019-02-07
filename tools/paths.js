const path = require('path');

const ROOT = path.join(process.cwd());

module.exports = {
  SRC: path.join(ROOT, 'src'),
  SERVER: path.join(ROOT, 'server'),
  BUILD: path.join(ROOT, 'build'),
  BUILD_SERVER: path.join(ROOT, 'build_server'),
  NODE_MODULES: path.join(ROOT, 'node_modules'),
};
