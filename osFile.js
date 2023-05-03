//Check the current user
const os=require('os');
const user=os.userInfo()
{
console.log(user);
}
//Check system uptime
console.log(`The system uptime is: ${os.uptime()} seconds`);
//check system properties
const currentOs=
{
    type:os.type(),
    release: os.release(),
    memory: os.totalmem,
    freememory:os.freemem()
}
console.log(currentOs);
