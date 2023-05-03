const {readFileSync, writeFileSync}=require('fs');
//Read  a file
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(first,second);
//Write to a file
const writes=writeFileSync('./content/third.txt',` ${first},${second}`, {flag:'a'});
console.log(writes);