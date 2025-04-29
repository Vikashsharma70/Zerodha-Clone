require('dotenv').config();
const express = require('express')

const app = express()
const mongoose= require('mongoose')

const data = require('./data')

// const {HoldingsModel} = require ('../models/HoldingsModel.js')
const {PositionsModel} = require ('../models/PositionsModel.js')



const PORT = process.env.PORT || 3000;
const URL ='mongodb+srv://helloworld140407:4Zxetqeu2IUGGohe@zerodha.efblj.mongodb.net/zerodha?retryWrites=true&w=majority&appName=ZERODHA' ;

mongoose.connect(URL)
  .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

const initdb = async ()=>{
    await PositionsModel.insertMany(data.data)
    console.log('Database initialized')
}
initdb();


// const initdb = async ()=>{
//     await HoldingsModel.insertMany(data.data)
//     console.log('Database initialized')
// }
// initdb();


app.listen(PORT , ()=>{
    console.log('server is running on port 3000')
    
})