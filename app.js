const http=require('http');
const {readFile}=require('fs');
const { resolve } = require('path');
const { result } = require('lodash');
const { error } = require('console');

const  server =http.createServer((req,res)=>
{ 
    if(req.url==='/')
    {
 
    res.end('Welcome to NodeJs Programming');
    }
    if(req.url==='/about')
    {
       res.end('Here is our short story');
    }
    if(req.url==='/contact')
    {
        for(let i=0; i<500; i++)
        {
            for(let j=0; j<500; j++)
            {
                console.log(`${i} ${j}`);
            }
        }
        res.end('/about');
    }
    res.end(`<h1> Oops!</h1> <p>We can't find such a page <a href='/' </a> Back home</p>`)
})
server.listen(5000);
 //access global variables
 const names=require('./firstFile');
 const sayHi=require('./sayFile');
 const items=require('./array.js');
 console.log(items);
 require('./addValue');
  //display path
  console.log(__dirname);
 //set time interval
//  setInterval(() => {
//       console.log('Hello World');
 
//  },1000);
 
 sayHi(names.john);
 sayHi(names.peter);
 sayHi('susan');
 //prromises
 const getText=(path)=>
 {
   return new Promise((resolve,reject)=>
    {
     readFile(path, 'utf8' ,(err,data)=>
{
    if(err)
    {
        reject(err);
    }
    else
    {
    resolve(data);
    }
})

    })
 }
  getText('./content/files.txt').then(result=>console.log(result)).catch((err)=>console.log(err))
 
 //Create server\
 // Read data from a file

