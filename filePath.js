const path=require('path');
console.log(path.sep);
//access the combine path
const path1=path.join('/content','content_1','contentFile.txt');
console.log(path1);
//Get the contentFile.txt from the path
const path2=path.basename(path1);
console.log(path2);
//access the complete path of a file
const fullPath=path.resolve(__dirname,'content','content_1','contentFile.txt');
console.log(fullPath);
