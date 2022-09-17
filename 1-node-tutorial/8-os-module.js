const os = require('os');

//infor about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log('The System uptimg is :' + os.uptime());

const currentOS = {
    name: os.type(),
    releaas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);