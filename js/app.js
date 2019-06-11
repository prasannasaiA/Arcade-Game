"use strict";
// Store all sprites in an array.
var sprites = ['images/char-boy.png',
  'images/char-cat-girl.png',
  'images/char-pink-girl.png',
  'images/char-horn-girl.png',
  'images/char-princess-girl.png'
];
//Getting all references from HTML.
var enter = document.querySelector(".spriteChangeEnter");
var modal_win = document.querySelector(".modal-win");
var modal_lost = document.querySelector(".modal-lost");
var btnWin = document.querySelector(".button-win");
var btnLost = document.querySelector(".button-lost");
// To count collisions between player and enemies
var collision = 0,
  lives = 3;
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for enemy.
  this.sprite = 'images/enemy-bug.png';
}
Enemy.prototype.update = function(dt) {
  // we should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  this.speed = 250 + Math.floor(Math.random() * 3);
  if (this.x >= 606) {
    this.x = 0;
  }
  if (this.x < player.x + 40 && this.x + 60 > player.x && this.y < player.y + 70 && this.y + 70 > player.y) {
    // Increment the collision value by 1 for each collision between player and enemy.
    collision++;
    // For every collision decrease the life of player.
    lives--;
    // If there occurs 3 collision the should be over and display a popup.
    if (collision == 3) {
      setTimeout(lost, 400);
    }
    // Move back the player to its original position.
    player.x = 230;
    player.y = 400;
  }
}

function lost() {
  pop_lost();
  collisionPopupContent();
}

// Display the popup
function pop_lost() {
  modal_lost.style.display = "block";
  btnLost.addEventListener("click", () => {
    window.location.reload(true); //Reload the window
  });
}

function collisionPopupContent() {
  // Dispaly content on popup.
  document.querySelector("#contentH1-lost").innerHTML = 'OOPS!!';
  document.querySelector("#contentH2-lost").innerHTML = 'Never giveup :)';
}

// To draw the enemy on the screen, required method for game.
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  // Displaying text on canvas.
  ctx.font = "20px Georgia";
  ctx.fillStyle = "black";
  ctx.fillText("Lives :" + lives, 30, 40);
  ctx.font = "45px Georgia";
  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, 606, 0);
  gradient.addColorStop("0.3", "#F95700FF");
  gradient.addColorStop("0.5", "#00A4CCFF");
  gradient.addColorStop("1.0", "black");
  // Fill with gradient
  ctx.fillStyle = gradient;
  ctx.fillText("Arcade Game", 170, 40);
}
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Enemy position in y-direction in an array called enemyPosition
var enemyPosition = [230, 145, 60];
enemyPosition.forEach(pos => {
  var enemy = new Enemy(Math.floor(Math.random() * 333), pos, 200);
  allEnemies.push(enemy);
});

// player class
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-pink-girl.png';
}
//  player object is declared and (x,y) position of the player is passed through constructor
var player = new Player(230, 400);
// update method is called continously
Player.prototype.update = function() {
  // If the player reaches water
  if (this.y == -20) {
    // waits for 500 milliseconds before executing the code in arrow function
    setTimeout(() => {
      pop_win();
      popupContent();
      this.x = 230;
      this.y = 400;
    }, 500);
  }
}

// Display the popup
function pop_win() {
  modal_win.style.display = "block";
  // Reload the window after clicking the button
  btnWin.addEventListener("click", () => {
    window.location.reload(true); //Reload the window
  });
}

//Content on the popup box
function popupContent() {
  document.querySelector("#contentH1-win").innerHTML = '🎉🎊  Congratulations  🎊🎉';
  document.querySelector("#contentH2-win").innerHTML = 'You made your way! 👏👏';
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move the player position according inputKeys
Player.prototype.handleInput = function(keys) {
  // The player should not cross the boundaries.
  if (keys === 'left' && this.x > 20) {
    this.x -= 70;
  }
  if (keys === 'right' && this.x < 450) {
    this.x += 70;
  }
  if (keys === 'up' && this.y > -10) {
    this.y -= 70;
  }
  if (keys === 'down' && this.y < 355) {
    this.y += 70;
  }
};

// This listens for key presses and sends the keys to player.handleInput() method
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

// On clicking enter on keyboard the sprite changes randomly.
document.onkeyup = function(e) {
  // e.which the read-only property holds the information about the key which was pressed.
  if (e.which == 13) { // 13 is the keycode for 'Enter'.
    player.sprite = sprites[Math.floor(Math.random() * sprites.length)];
  }
}

enter.addEventListener('click', () => {
  player.sprite = sprites[Math.floor(Math.random() * sprites.length)];
});
