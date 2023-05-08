const http=require('http');
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
 
 
 //Create server