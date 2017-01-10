import FileSystem from 'fs';
import Path from 'path';

export const load = (filePath) => (
  JSON.parse(FileSystem.readFileSync(Path.resolve(filePath), 'utf-8'))
);
