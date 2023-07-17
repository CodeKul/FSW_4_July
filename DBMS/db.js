const mongo=require('mongoose');

// Connect Mongoose
mongo.connect("mongodb://127.0.0.1:27017/night_batc");
var db=mongo.connection;

// Collection store
var cl=db.collection('new');

var data={
    Name:"CodeKul",
    Address:"Pune",
    Age:35,
    Locations:['Pune','Mumbai']
}
// Data insert
cl.insertOne(data,()=>{
    console.log('added');
});

// cl.findOne({"name":"Hemeet"},()=>{
//     console.log('result');
// });