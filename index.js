try {
        var canvas = document.getElementById('videostream');
        var context = canvas.getContext('2d');
        socket = io(null, { transports: ['websocket']});
        socket.on('canvas', function(data) {
        var imageObj = new Image();
        imageObj.src = "data:image/jpeg;base64,"+data;
        imageObj.onload = function(){
            context.height = imageObj.height;
            context.width = imageObj.width;                      
            context.drawImage(imageObj,0,0,context.width,context.height);
        }
        });
    } catch(e){ }


