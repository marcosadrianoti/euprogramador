const events = require('events')

const emitter = new events.EventEmitter(); //Objeto de eventos.

const fn = () => {
    console.log("I had a dream!;")
}

emitter.on("dream", fn); //Liga o sensor para o evento 'dream'. Se acontecer, então executa a fn.

emitter.emit('dream'); //Dispara o evento.