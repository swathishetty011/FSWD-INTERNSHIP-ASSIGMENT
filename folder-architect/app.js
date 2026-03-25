// Import File System module
const fs = require('fs');
const path = require('path');

// Base folder
const baseFolder = 'ProjectFolder';

// Subfolders
const folders = ['Documents', 'Images', 'Videos'];

// Create base folder
if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder);
    console.log("Base folder created");
}

// Create subfolders
folders.forEach(folder => {
    const folderPath = path.join(baseFolder, folder);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`${folder} folder created`);
    }
});

// Create a file inside Documents
const filePath = path.join(baseFolder, 'Documents', 'data.txt');

fs.writeFileSync(filePath, 'This is sample data stored in Folder Architect project.');

console.log("File created and data written");

// Read data from file
const data = fs.readFileSync(filePath, 'utf8');

console.log("Retrieved Data:");
console.log(data);

// List files in Documents folder
const files = fs.readdirSync(path.join(baseFolder, 'Documents'));

console.log("Files inside Documents folder:");
console.log(files);

// Copy file to Images folder
const copyPath = path.join(baseFolder, 'Images', 'data_copy.txt');

fs.copyFileSync(filePath, copyPath);

console.log("File copied to Images folder");

// Move file to Videos folder
const movePath = path.join(baseFolder, 'Videos', 'data_moved.txt');

fs.renameSync(filePath, movePath);

console.log("File moved to Videos folder");

// Display final folder contents
console.log("Final Files in Videos folder:");
console.log(fs.readdirSync(path.join(baseFolder, 'Videos')));