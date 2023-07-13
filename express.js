const bodyParser = require('body-parser');
const express=require('express');
const app=express();

// Use json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// GET API -> It will Manage your Request and Send response
app.get('/',(req,res)=>{
    // res.status(404).send('<h1>Hello World </h1>');
    res.status(201).sendFile(__dirname+'/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

app.get('/help',(req,res)=>{
    res.send('<h1>Help Page</h1>');
})

// Route Parameters
app.get('/student/login/newone/:id/:name',(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    res.send(`<h2>${id} and ${name}</h2>`);
    // 00012830
    // if(id=='00012830'){
    //     res.send('<h1>Welcome Back Admin</h1>');
    // }
    // else{
    //     res.send('<h1>Wrong Password</h1>');
    // }
});

// Route -> form
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

// Post API for -> Form
app.post('/uform',(req,res)=>{
    // res.send('API Called');
    const uname=req.body.uname;
    const passw=req.body.passw;
    res.status(404).send(`User Name is ${uname} And Your Password is ${passw}`);
});

// 404 page return
app.all('*',(req,res)=>{
    res.send('<h1 style="color:red;">404 page not found !!!</h1>')
});


// PORT Define
app.listen(8007,()=>{
    console.log('server Start on PORT : 8007');
});


// Response Codes :
//  100-199 -> Information
// 200-299 -> Sucess 
// 300-399 -> Redirection
// 400-499 -> Client side Error
// 500-599 -> Server Side Error


// Task 7/7/2023 :
// build Get API For 5 pages + with response code
// Make 404 Page
// Get USer Name & Password Via Route Parameter -> Compare it and send response regarding it
