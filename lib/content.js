import fs from 'fs';
import path from 'path';

export function getModuleContent(section, id) {
  const contentDirectory = path.join(process.cwd(), 'content', section);
  const fullPath = path.join(contentDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  return fs.readFileSync(fullPath, 'utf8');
}
