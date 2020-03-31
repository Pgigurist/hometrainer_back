const mongoose = require('mongoose')

module.exports = () =>{
    return new Promise((resolve, reject)=>{
        mongoose.Promise = global.Promise
        mongoose.set('debug', true)
        
        mongoose.connection
        .on('error', error => reject(error))
        .on('close', ()=> console.log('database connection closed'))
        .once('open', ()=> {
            const info = mongoose.connections[0]
            console.log('db connected')
        })
        
        mongoose.connect('mongodb://localhost/trainer')
    })
}