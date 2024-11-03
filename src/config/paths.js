const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const GITHUB_WORKFLOWS_DIR = path.join(PROJECT_ROOT, '.github/workflows');

const paths = {
  projectRoot: PROJECT_ROOT,
  matrixConfig: path.join(GITHUB_WORKFLOWS_DIR, 'nodejs_project_matrix.json'),
};

module.exports = paths;
