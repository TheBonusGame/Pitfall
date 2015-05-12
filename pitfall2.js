( function() {

    "use strict";

    window.Pitfall = function( oApplication ) {

        var canvasWidth = oApplication.width,
            canvasHeight = oApplication.height;

        // Hero
        var oHero = {
            "rectangle": {
              x : canvasWidth/2 - 15,
              y : canvasHeight - 30,
              width : 30,
              height : 30
            },
            "render": function() {
              var rect = this.rectangle,
                  ctx = oApplication.context;

              ctx.fillStyle = "red";
              ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
            }

        };

        oHero.render();
      };

} )();





