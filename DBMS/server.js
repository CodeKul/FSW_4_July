const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Schema = require('./schema')

// Connect Mongo with express
mongoose.connect("mongodb://127.0.0.1:27017/night_batc");
var database=mongoose.connection;
var collectionn=database.collection('express');

// use JSON and Urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});

app.post('/register',(req,res)=>{
    // res.send('Data Got');
    const uname=req.body.uname;
    const uemail=req.body.uemail;
    const upassw=req.body.upassw;
    const dob=req.body.dob;
    const gender=req.body.gender;
    const hobbies=req.body.hobbies;

    var data={
        UserName:uname,
        UserEmail:uemail,
        UserPassword:upassw,
        DateOfBirth:dob,
        Gender:gender,
        Hobbies:hobbies
    };

    // Insert Query
    collectionn.insertOne(data,()=>{
        res.redirect('/login');
    });
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');;
});

app.post('/login',async(req,res)=>{
    const uname=req.body.uname;
    const passw=req.body.passw;

    const user= await collectionn.findOne({"UserName":uname});
    // console.log(user);
    // res.send(user);
    
    try{
        if(user.UserPassword==passw){
            // res.status(200).sendFile(__dirname+'/welcome.html');
            res.send(user);
        }
        else{
            res.status(404).send("Invalid Password");
        }
    }
    catch{
        res.send('User Not Found');
    }
});

app.get('/buy',(req,res)=>{
    res.status(300).sendFile(__dirname+'/buying.html');
});
app.post('/buy',(req,res)=>{
    const nameee=req.body.namee;
    const add=req.body.add;
    const pinn=req.body.pin;
    const pmm=req.body.pm;

    // Use Schemas
    const thing=new Schema({
        namee:nameee,
        adddress:add,
        // pin:pinn,
        // pm:pmm
    });

    thing.save().then(
        ()=>{
            res.json({msg:"Schema run Successfully"});
            // U can apply send data query here
        }
    ).catch(
        (err)=>{
            res.json({err:err});
        }
    );
});

app.get('/api',async(req,res)=>{
    var api=await fetch('https://api.adviceslip.com/advice');
    var d=await api.json()
    // console.log(d);
    res.send(d.slip.advice);
})

app.listen(8087,()=>{console.log('http://localhost:8087/')});

// PORT : 8082 
// 1. Index Page - 202 
// 2. Register Page - 200
// 3. Send Data to the DB 
// 4. Login Page - 300
// 5. After Login -> Show Data To the page