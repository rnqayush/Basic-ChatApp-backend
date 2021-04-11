const io =require("socket.io")(); // it is invoking it after requiring
const messageHandler=require("./handlers/message.handler")


let currentUserId=2
const users={}




io.on("connection",socket=>{       // io.on is used to start the connection of the server with client . whenever any client is added to the server it will console log a user connected
    console.log("a user connected");
    users[socket.id]= {userId:currentUserId++ }
    
    socket.on("join",username=>{
       users[socket.id].username=username
    })

    messageHandler.handleMessage(socket,users) 
})





io.listen(3001);   // it is listening to the port 3001



/*
const textmsg={
            _id: 1,
            text: message,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          }
*/