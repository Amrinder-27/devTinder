const express = require("express");
const app = express();



// app.use('/user',(req, res)=>{
//     res.send('Hello from the server')
// })
app.use('/user', (req, res, next) => {
    console.log('send');
    next();
  //  res.send('response 1')
    
    
}, (req, res, next)=>{
    //res.send('second respond !!')
    next();
},  (req, res, next)=>{
   // res.send('4th respond !!')
   next();
},  (req, res, next)=>{
    res.send('5th respond !!')
}
)

app.get('/user', (req,res) =>{
    res.send('hello from user')
})

app.post(/.*fly$/, (req,res) =>{

    res.send('data has been saved suceesfully')
})
app.post(/a/, (req,res) =>{

    res.send('data has been saved suceesfully')
})

app.listen(3000, ()=>{
    console.log('server is started successfully');
})