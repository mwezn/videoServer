const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http/*, {origins: allowedOrigins} */);
const port = 5000;
const path=require('path')


app.use( '/' , express.static(path.join(__dirname ,'')))
console.log(path.join(__dirname ,''))


var ffmpeg = require('child_process').spawn("ffmpeg", [
    "-i", "/dev/video0", 
    "-vb", "5M",
    "-preset", "ultrafast", 
    '-acodec', 'copy',
    "-f", "mjpeg", 
    "pipe:1"]);

ffmpeg.on('error', function (err) {
    throw err;
});

ffmpeg.on('close', function (code) {
    console.log('ffmpeg exited with code ' + code);
});

ffmpeg.stderr.on('data', function (data) {
    // console.log('stderr: ' + data);
});
let noUsers=0;
io.on('connection', (socket) => {

    noUsers+=1;
    console.log(`A user connected: User # ${noUsers}`);


    ffmpeg.stdout.on('data', function (data) {
        var frame = new Buffer(data).toString('base64');
        io.sockets.emit('canvas',frame);
    });
    
    socket.on('message', (msg) => {
        switch (msg) {
            case 'client_event' :
                console.log("Client Events: " + msg);
                disconnect_client();
                break;
        }
    });

    socket.on('disconnect', () => {
        console.log("Disconnected from server");
    });

    socket.on('forceDisconnect', function() {
        socket.disconnect();
    });
}); 
app.get('/', (req, res)=> {
    //res.setHeader("Content-Type", "text/javascript");
    res.sendFile('index.html', { root: __dirname })
})

app.get('/image', (req, res)=> {
    //res.setHeader("Content-Type", "text/javascript");
    res.sendFile('image.html', { root: __dirname })
})

http.listen(port, () => {
    console.log('listening on localhost:' + port);
});
