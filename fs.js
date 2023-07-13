// Import fs module
const fs=require('fs');

// file Read
// readFile(fileName,EncodingFormate,(errors,FileData)=>{});
fs.readFile('new.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

// File Create
// writeFile(fileName,FileData,(error)=>{});
fs.writeFile('node.txt','Hello I am Node.txt',(err)=>{
    if(err) throw err;
    console.log('File Created SuccessFully');
});

// Append 
// appendFile(fileName,Data,(error)=>{});
fs.appendFile('new.txt',' Append',(err)=>{
    if(err) throw err;
    console.log('Apped');
});