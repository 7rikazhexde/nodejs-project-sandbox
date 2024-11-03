const fs = require('fs');
const { CONFIG_PATH } = require('./config');

function parseConfigJson(filePath = CONFIG_PATH, silent = false) {
  try {
    const jsonContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonContent);
  } catch (error) {
    if (!silent) {
      console.error('Error reading or parsing JSON:', error.message);
    }
    return null;
  }
}

if (require.main === module) {
  const filePath = process.argv[2] || CONFIG_PATH;
  const result = parseConfigJson(filePath);
  if (result) {
    console.log(JSON.stringify(result, null, 2));
  }
}

module.exports = { parseConfigJson };
