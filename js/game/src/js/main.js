var game = (function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //1. Create the player object
    // Define all argument that will be used by fillRect()
    var player = {
        x: 0,
        y: 475,
        h: 25,
        w: 25,
        fill: '#fff',
        //6. Add a default direction for player movement.
        dir: 'right',
        //13. Add a speed property to the player this is the number of pixels 
        //the player will move each frame
        speed: 5
    }

    return {

        //2. Draw the player to the canvas
        player: function () {
            ctx.fillStyle = player.fill;

            //3. Define how many pixels the player
            // should move each frame (i.e. speed)
            ctx.clearRect(
                player.x - player.speed,
                player.y - 1,
                player.w + 2,
                player.h + 2
            );

            //7. Add x pixels to move the player to the right
            if (player.dir === 'right') {
                ctx.fillRect(
                    player.x = (player.x + player.speed),
                    player.y,
                    player.w,
                    player.h
                );

                //8. Change the player direction when the player touches the edge 
                //of the canvas.
                if ((player.x + player.w) >= canvas.width) {
                    player.dir = 'left';
                }

            } else {

                //9. Subtract x pixels to move the player to the left
                ctx.fillRect(
                    player.x++,
                    player.y,
                    player.w,
                    player.h
                );

                //10. Change the player direction when the player touches the edge 
                //of the canvas.
                if (player.x <= 0) {
                    player.dir = 'right';
                }
            }
        },

        //11. Create a setter for changing the current direction of the user.
        changeDirection: function () {
            if (player.dir === 'left') {
                player.dir = 'right';
            } else if (player.dir === 'right') {
                player.dir = 'left';
            }
        },

        //4. Create an animation frame
        //5. Redraw the player every time a frame is executed
        animate: function () {
            this.player();
            window.requestAnimationFrame(this.animate.bind(this));
        },

        init: function () {
            canvas.height = 600;
            canvas.width = 800;

            this.animate();
        }
    }
})();

game.init();

//12. Add a listener to allow the  user to change the direction
//of the player sprite
window.addEventListener('keyup', function () {
    game.changeDirection();
});