const {readFile,writeFile}=require('fs');
const readFirst=readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err);
    }
    const first =result   

readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err);
    }
    const second =result 
    writeFile('./content/files.txt','Hi there' ,'utf8',(err,result)=>{
        if(err)
            {
                console.log(err);
            }
          console.log(result);
        })
    })
})


    
        




