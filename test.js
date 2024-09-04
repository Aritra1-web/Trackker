const express=require('express');
const app=express();
const http=require("http");
const path=require("path");
//const viewspath=path.join(__dirname,"../templates/views");

const socketio=require("socket.io");
const server=http.createServer(app);
const io=socketio(server,{
    cors:{
        origin:"*"
    }
});

app.set('view engine','ejs');
//app.set("views",viewspath);
 app.set(express.static(path.join(__dirname, "public")));     

io.on("connection", function(socket){
    console.log("connected");

    socket.on("disconnected",()=>{
        console.log("socket disconnected");
    })
});

app.get("/",function(req,res){
    res.render(__dirname +"/views/index.ejs" );
})


server.listen(3000,()=>{
    console.log(`server is running at  http://localhost:3000`);
});
