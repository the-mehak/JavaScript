const path = require('path');

// Example 1: Joining Paths
const fullPath = path.join('/Users/username', 'projects', 'my-project', 'index.js');
console.log('Full Path:', fullPath);

// Example 2: Resolving Paths
const resolvedPath = path.resolve('example.txt');
console.log('Resolved Path:', resolvedPath);

// Example 3: Getting the Directory Name
const dirname = path.dirname(fullPath);
console.log('Directory Name:', dirname);

// Example 4: Getting the File Extension
const extension = path.extname(fullPath);
console.log('File Extension:', extension);

// Example 5: Normalizing a Path
const normalizedPath = path.normalize('/path/to//some//file.txt');
console.log('Normalized Path:', normalizedPath); 
