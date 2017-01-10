const FileSystem = require('fs')
const Path = require('path');

module.exports = {
  load(filePath) {
    return JSON.parse(
      FileSystem.readFileSync(Path.resolve(filePath), 'utf-8')
    );
  }
};
