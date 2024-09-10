const express = require('express')
const app = express()

const indexRouter = require('./routes')



//리액트 프로젝트 경로설정
const path = require('path')

app.use(express.static(path.join(__dirname,'..','frontend','build')))




app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'),()=>{
    console.log(`Sever is runnung on ${app.get('port')}`);
    
})