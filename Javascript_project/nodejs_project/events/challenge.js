const { EventEmitter } = require('events');
const myBorn = new EventEmitter();

const birthdayEventListener = ({name}) =>  {
    console.log(`Happy Birthday ${name}`);
}

myBorn.on('birthday', birthdayEventListener);
myBorn.emit('birthday', {name : 'Tiyas Aria'});
