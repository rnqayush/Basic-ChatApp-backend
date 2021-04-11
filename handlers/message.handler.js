
let currentMessageId=1

function createMessage(user,messageText){
  return{
      _id: currentMessageId++,    // it is messageId it should be unique every time
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: user.userId,
        name: user.username,
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
}




function handleMessage(socket,users){
    socket.on("message",messageText=>{    // socket .on is recieving the message sent by the client to server. it is used to listen the messages sent by client or server
        console.log(messageText);
  //      io.emit("message",messageText) // it will send message to all its client which are coming to the server
        
        const user=users[socket.id]     // userId is being set to send to frontend
        
        const message=createMessage(user,messageText) // this function is being called... everything will get setup as according to frontend gifted chat
        console.log(message);
        socket.broadcast.emit("message",message)  // its another way of emiting messages using broadcast
      
      })
}







module.exports={handleMessage}