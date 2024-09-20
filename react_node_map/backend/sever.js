const express  = require('express')
const app = express()

const cors = require('cors')

const placeRouter = require('./routes/place')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/place', placeRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'),()=>{
    console.log(`Sever is running on ${app.get('port')}`);
    
})