     var canvas = document.getElementById('videostream');
        var ctx = canvas.getContext('2d');
        var slider=document.querySelector('input#slider')
        var p=document.querySelector('p#size')
        var imageObj = new Image();

        function drawImageSegment(pixWidth){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            /*for (let i=0;i<10;i++){ ORIGINAL
               ctx.drawImage(imageObj,100*i, 100*i, 100, 100, 100*i, 100*i, pixWidth, pixWidth)
        

            }*/

            /*for (let j=0;j<10;j++){  MYCODE
               
               ctx.drawImage(imageObj,0, 100*j, 100, 100, 0, 100*j, pixWidth, pixWidth)
               ctx.drawImage(imageObj,100, 100*j, 100, 100, 100, 100*j, pixWidth,pixWidth)
               ctx.drawImage(imageObj,200, 100*j, 100, 100, 200, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,300, 100*j, 100, 100, 300, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,400, 100*j, 100, 100, 400, 100*j,pixWidth,pixWidth)
            }*/

            for (let j=0;j<10;j++){ //CHATGPT REFACTORED
               for (let i=0;i<5;i++){
                   let x = i * 100;
                   let y = j * 100;
                   ctx.drawImage(imageObj, x, y, 600,600, x, y, pixWidth,pixWidth);
               }
            }
            return
        }

         
        slider.addEventListener('input', ()=>{
           console.log(slider.value)
           p.innerHTML=slider.value;
           drawImageSegment(slider.value)
           socket.emit('canvas')
           
        })
        p.innerHTML=slider.value;



/* COPIED BELOW FROM GOOGLE */
        let i=0;
        socket = io(null, { transports: ['websocket']});
        socket.on('canvas', function(data) {
        
        imageObj.src = "data:image/jpeg;base64,"+data;
        imageObj.onload = function(){
        if(i<600){
          i+=5;
          drawImageSegment(i)
        }
         drawImageSegment(i)
                              
        } 
        
      })
        
        


