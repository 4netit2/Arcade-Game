// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;  //correspond for x axis
    this.y = y;  //correspond for y axis
    this.speed = 80 + Math.floor(Math.random() * 200);  //speed for the enemy
    this.height = 160;
    this.width = 100;
};


Enemy.prototype.update = function(dt) {  // Update the enemy's position, required method for game

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    if (this.x < 550) 
    {
        this.x += (this.speed * dt); // Parameter: dt, a time delta between ticks
    }
    else 
    {
        this.x = -80;
    }
//https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 

	if (player.x < this.x + 80 && player.x + 80 > this.x &&
	   player.y < this.y + 60 && player.y + 60 > this.y) {
	   
        alert("Collision");

        player.reset();
    
    }	
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height); //add also width and height
};

// Place all enemy objects in an array called allEnemies
var allEnemies = [   // Place all enemy objects in an array called allEnemies
    new Enemy(-90, 60),
    new Enemy(-190, 140),
    new Enemy(-590, 230),
    new Enemy(-390, 140),
    new Enemy(-490, 160),
    new Enemy(-690, 230)
];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(dt) {

}

// Now instantiate your objects.

var player = new Player(); // Place the player object in a variable called player

Player.prototype.render = function() {  //render method for drawing the player on the screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);  //add also width and height
};

Player.prototype.reset = function() {   //reset function to move the player at starting point
    this.x = 200;
    this.y = 450;
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
