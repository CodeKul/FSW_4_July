const http=require('http');
// Hyper Text Transfer Protocol
const fs=require('fs');

// http.createServer(Routing).listen(Port);
// createServer((request,response)=>{})
http.createServer((req,res)=>{
    // Output
    // res.write('Hello World !! How are you ??');
    // res.end();
    // console.log(req.url);

    // Routing 
    if(req.url=='/'){
        // res.write('Hello I am Index Page');
        // res.end();   
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        });
    }
    else if(req.url=='/about'){
        // res.write('<h1>About Us</h1><p>This is about us</p>');
        // res.end();
        fs.readFile('about.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        });
    }
    else{
        // 404 Page 
        res.write('404 Page not Found :|');
        res.end();
        
    }

}).listen(8080,(err)=>{
    console.log('Server Start !');
});
// port - 1025 - 9999   -> 3000(react) -> 8080/8000 Node
// Server close in terminal -> CTRL + c