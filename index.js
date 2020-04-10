//require needed modules
let express = require('express')

//declare express instance
let app = express()

//declare some routes
app.get('/', (req,res) => {
    res.send('Home page stub')
})

//pick a port to listen on 
app.listen(3000, () => {
    console.log('ready to rock and roll! 🎸')
})