( function() {

    "use strict";

    window.Pitfall = function( oApplication ) {

        // global params
        var canvasWidth = oApplication.width,
            canvasHeight = oApplication.height,
            requestAnimationFrame = window.requestAnimationFrame,
            keys = [],
            friction = 0.8,
            gravity = 0.2;

        // Hero
        var oHero = {
            "rectangle": {
              x : canvasWidth/2 - 15,
              y : canvasHeight - 30,
              width : 30,
              height : 30,
              speed: 3,
              velX: 0,
              velY: 0,
              jumping: false
            },
            "render": function() {
              var rect = this.rectangle,
                  ctx = oApplication.context;

              ctx.clearRect(0,0,canvasWidth,canvasHeight);
              ctx.fillStyle = "red";
              ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
            },
            "update": function() {
              var rect = this.rectangle;
              // check keys
              if (keys[38] || keys[32]) {
                  // up arrow or space
                  if(!rect.jumping){
                   rect.jumping = true;
                   rect.velY = -rect.speed*2;
                }
              }
              if (keys[39]) {
                  // right arrow
                  if (rect.velX < rect.speed) {             
                      rect.velX++;   
                   }     
              }     
              if (keys[37]) {         
                  // left arrow         
                  if (rect.velX > -rect.speed) {
                      rect.velX--;
                  }
              }

              rect.velX *= friction;
 
              rect.velY += gravity;
           
              rect.x += rect.velX;
              rect.y += rect.velY;
           
              if (rect.x >= canvasWidth - rect.width) {
                  rect.x = canvasWidth - rect.width;
              } else if (rect.x <= 0) {         
                  rect.x = 0;     
              }    
            
              if(rect.y >= canvasHeight - rect.height){
                  rect.y = canvasHeight - rect.height;
                  rect.jumping = false;
              }
              this.render();
              requestAnimationFrame(oHero.update.bind(oHero)); // bind(oHero); c'est this.
          }

        };

        oHero.render();
        oHero.update();

        document.body.addEventListener("keydown", function(e) {
            keys[e.keyCode] = true;
        });
        document.body.addEventListener("keyup", function(e) {
            keys[e.keyCode] = false;
        });

      };

} )();





