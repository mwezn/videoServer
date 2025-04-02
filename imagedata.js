        var canvas = document.getElementById('videostream');
        var ctx = canvas.getContext('2d');
        var slider=document.querySelector('input#slider')
        var crop=document.querySelector('input#crop')
        var p=document.querySelector('p#size')
        var pcrop=document.querySelector('p#cropsize')
        var cropw=document.querySelector('input#cropw')
        var pcrop2=document.querySelector('p#cropsize2')

        console.log(`canvas width= ${canvas.width} canvas height = ${canvas.height}`)
        
        function imageSegment(pixWidth){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            console.log(imageObj.width,imageObj.height)
            var aspectRatio=imageObj.width/imageObj.height
            console.log(aspectRatio)
            ctx.drawImage(imageObj,0, 0, imageObj.width, imageObj.height, 0, 0, aspectRatio*pixWidth,pixWidth)
            //ctx.drawImage(imageObj,0, 0, 100,100, 0, 0, pixWidth, pixWidth)
            return 
         }

         function drawImageSegment(pixWidth){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            /*for (let i=0;i<10;i++){
               ctx.drawImage(imageObj,100*i, 100*i, 300, 300, 100*i, 100*i, pixWidth, pixWidth)
            }*/

            for (let j=0;j<10;j++){
               ctx.drawImage(imageObj,0, 100*j, pixWidth, pixWidth, 0, 100*j, pixWidth,pixWidth)
               ctx.drawImage(imageObj,100, 100*j, pixWidth,pixWidth, 100, 100*j, pixWidth,pixWidth)
               ctx.drawImage(imageObj,200, 100*j, pixWidth,pixWidth, 200, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,300, 100*j, pixWidth,pixWidth, 300, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,400, 100*j, pixWidth,pixWidth, 400, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,500, 100*j, pixWidth,pixWidth, 500, 100*j, pixWidth, pixWidth)
               ctx.drawImage(imageObj,600, 100*j, pixWidth,pixWidth, 600, 100*j, pixWidth,pixWidth)
               ctx.drawImage(imageObj,700, 100*j, pixWidth,pixWidth, 700, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,800, 100*j, pixWidth,pixWidth, 800, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,900, 100*j, pixWidth,pixWidth, 900, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,1000, 100*j, pixWidth,pixWidth, 1000, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,1100, 100*j, pixWidth,pixWidth, 1100, 100*j,pixWidth,pixWidth)
               ctx.drawImage(imageObj,1200, 100*j, pixWidth,pixWidth, 1200, 100*j,pixWidth,pixWidth)
            }
            return
        }

        function cropImage(pixWidth,cropwidth=100){
         var aspectRatio=imageObj.width/imageObj.height
         for (let j = 0; j < 14; j++) {
            for (let i = 0; i <= 12; i++) {
                let x = i * 100;
                let y = j * 100;
                ctx.drawImage(imageObj, x, y, pixWidth, pixWidth, x, y, cropwidth, cropwidth);
            }
        }
        }
         
        slider.addEventListener('input', ()=>{
           console.log(slider.value)
           p.innerHTML=slider.value;
           imageSegment(slider.value)
           
        })

        crop.addEventListener('input', ()=>{
         console.log(crop.value)
         pcrop.innerHTML=crop.value
         cropImage(crop.value)
      })

      cropw.addEventListener('input', ()=>{
         cropImage(crop.value,cropw.value)
         pcrop2.innerHTML=cropw.value
      })


        p.innerHTML=slider.value;
        pcrop.innerHTML=crop.value
        pcrop2.innerHTML=cropw.value

      const inputElement = document.getElementById("input");
      inputElement.addEventListener("change", handleFiles, false);
      function handleFiles() {
         const fileList = this.files; /* now you can work with the file list */
         console.log(fileList,fileList[0])
         imageObj.src = `./${fileList[0].name}`;    
      }


        
        var imageObj = new Image();
        //imageObj.src = "data:image/jpeg;base64,"+data; For Webcam
        let i=0;
         
        imageObj.src = './tri1.png';       
        
        imageObj.onload = function(){
            cropImage(600,600)
        } 
        
        
;
