// Enemies our player must avoid
// Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

'use strict';

var Enemy = function(x, y, speed) {
     this.sprite = 'images/enemy-bug.png';  //images for enemy
     this.x = x;  //correspond for x axis
     this.y = y;  //correspond for y axis
     this.speed = 80 + Math.floor(Math.random() * 200);  //speed for enemy
     this.height = 160;
     this.width = 100;
};


Enemy.prototype.update = function(dt) {  // Update the enemy's position, required method for game

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // source: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
    if (this.x < 550) {
        this.x += (this.speed * dt); // Parameter: dt, a time delta between ticks
     }
    else {
        this.x = -80;
     }
     
	if (player.x < this.x + 60 && player.x + 80 > this.x &&
	   player.y < this.y + 40 && player.y + 0 > this.y) {
       
        alert('Collision');   //show an alert if  detect a collision 

        player.reset();
    
    }	
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height); //adding also width and height
};


var allEnemies = [ new Enemy(-90, 60), new Enemy(-190, 140), new Enemy(-590, 230), new Enemy(-390, 140), new Enemy(-490, 160),  new Enemy(-690, 230)]; 
 // Place all enemy objects in an array called allEnemies

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 450;
    this.height = 121;
    this.width = 101;

}

Player.prototype.update = function(dt) {

}

var player = new Player(); // Place the player object in a variable called player

Player.prototype.render = function() {  //render method for drawing the player on the screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);  //add also width and height
};

Player.prototype.reset = function() {   //reset function to move the player at starting point
    this.x = 200;
    this.y = 410;
};

player.handleInput = function(keyPressed){

    if (keyPressed === 'left'  && this.x > 0){
        this.x -= 54;
    }

    if (keyPressed === 'right'  && this.x < 390){
        this.x += 54;

    }
    if (keyPressed === 'up' && this.y > 0){
        this.y -= 42.5;

    }
    if (keyPressed === 'down' && this.y < 435 ){
        this.y += 24.5;
    }

    if (this.y < 0)    //if it touches the water

        setTimeout(() => {
            player.reset();
        }, 700);  
  };



 
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
