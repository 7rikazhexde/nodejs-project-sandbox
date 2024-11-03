const path = require('path');

// プロジェクトの '.github/workflows' ディレクトリへの相対パスを指定
const CONFIG_PATH = path.resolve(__dirname, '.github/workflows/nodejs_project_matrix.json');

module.exports = {
    CONFIG_PATH
};