const express = require("express");
const app = express();

app.use('/user', (req, res, next)=>{
    res.send('hello user'); // middle ware
    next();
},
(req, res, next)=>{
    res.send('hello user2'); // middle ware
    next();
}

)

// app.use('/user',(req, res)=>{
//     res.send('Hello from the server')
// })
// app.use('/user', (req, res, next) => {
//     console.log('send');
//     next();
//   //  res.send('response 1')
    
    
// }, (req, res, next)=>{
//     //res.send('second respond !!')
//     next();
// },  (req, res, next)=>{
//    // res.send('4th respond !!')
//    next();
// },  (req, res, next)=>{
//     res.send('5th respond !!')
// }
// )
//u can use anytyoe of method
// this is below middle ware to authenticate the request
app.use('/admin', (req, res, next)=>{
    console.log('admin auth is getting checked!!')
    const token = 'xyz';
    const isAuth = token === 'xyz2'
    if(!isAuth){
       
      res.status(401).send('Not Authorized person')
       
    } else {
        next();
    }
})
app.get('/admin/GetAllData', (req, res)=>{
   res.send('data successfully authorized')
})
app.get('/admin/Delete', (req, res)=>{
    res.send('data successfully deleted')
})

app.get('/user', (req,res) =>{
    res.send('hello from user')
})

app.post(/.*fly$/, (req,res) =>{

    res.send('data has been saved suceesfully')
})
app.post(/a/, (req,res) =>{

    res.send('data has been saved suceesfully')
})

app.listen(7777, ()=>{
    console.log('server is started successfully');
})