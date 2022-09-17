const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//create event and run using call back function
customEmitter.on('response',(name, id)=>{
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log('some other logic here')
})

//after finish running event, emit
customEmitter.emit('response', 'john', 34)