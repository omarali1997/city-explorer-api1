require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const weathData = require('./data/weather.json');

server.use(cors());
// local ip address
//port

const PORT = process.env.PORT;

// //http://localhost:3000/
// server.get('/', (req, res) => {
//     console.log("test home route");
//     res.send('Hi from the home roure');
// })
// //http://localhost:3000/test
// server.get('/test', (req, res) => {
//     console.log("test route");
//     res.send('Hi from the test roure');
// })

// server.listen(PORT, () => {
//     console.log(`Hello im on ${PORT}`);
// })

//http://localhost:3000/weather
server.get('/weather', (req, res) => {
    let weathlon = weathData.find((item) => {
        if(item.city_name == req.query.name)
        {
            return item;
        }
    })
    res.send(weathlon);
})

//http://localhost:3000/getweatherData?

server.listen(PORT, () => {
    console.log(`Hello I am lisiting on ${PORT}`);
})


server.get("*",(req,res)=>{
    res.send("eror 404");
})  
