
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