const app = require('../app')
const database = require('./database')

database().then(info =>{
    console.log('conected to mongodb')
    app.listen(3000, ()=>{
        
    })
}).catch((e)=>{
    console.log(e)
    process.exit(1)
})
