# Classic Arcade Game Clone Project

A simple Classic Arcade Game Project for Udacity's Front-end development [nanodegree program](https://www.udacity.com). This project is all about Object Oriented JavaScript. It is all about crossing the bugs and reach to the Water to win the game, and try not to touch a Bug!

-------------------------

## Table of Contents

- [Download](#download)
- [Instructions](#instructions)
- [What's included](#whats-included)
- [Steps followed](#steps-followed)
- [Game Rules](game-rules)
- [How to play](#how-to-play)
- [Additional functionality](#additional-functionality)
- [Benefits](#benefits)
- [Tools used](#tools-used)
- [Contributing](#contributing)

-------------------

## Download

- The starter code for this project can be downloaded from:

    1. The Arcade Game Project repository on GitHub : <https://github.com/udacity/frontend-nanodegree-arcade-game>

- You can download or clone them from the repository.

------------

## Instructions

- Initially, The project contains some errors. To start building this project first the code should be **error free**.  

- The starter project has some HTML, CSS and Js files with a README file included.

- This requires modifying the HTML and CSS files, but primarily the JavaScript file.

- To get started, open `js/app.js` and start building out the app's functionality.

- Before moving on, make sure you are comfortable with the content from [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud711).

------------------

## What's included

- Within the download you'll find the following directories and files:

```
fend-project-arcade-game-master.zip
-->css/
    -->style.css
-->images/
    -->char-boy.png
    -->char-cat-girl.png
    -->char-horn-girl.png
    -->char-pink-girl.png
    -->char-princess-girl.png
    -->enemy-bug.png
    -->Gem Blue.png
    -->Gem Green.png
    -->Gem Orange.png
    -->grass-block.png
    -->Heart.png
    -->Key.png
    -->Rock.png
    -->Selector.png
    -->Star.png
    -->stone-block.png
    -->water-block.png
-->js/
    -->app.js
    -->engine.js
    -->resource.js
-->index.html
-->README.md

```

---------------------------------------------------------------------------

## Steps followed

- Inside the `app.js` file, you will need to implement the `Player` and the `Enemy` classes.

- The `Enemy` function, which initiates the Enemy by loading the image/sprite which is already provided in images folder.

- The `update` method for the **Enemy** updates the `Enemy` location and handles collision with the `Player`.

- The `Player` class is implemented with reference to `Enemy` class.

- The `Player` function, which initiates the **Player** by loading the image/sprite by setting `this.sprite` to the appropriate image in the image folder and setting the `Player` initial location.

- The `handleInput` method, which receives the user input, `allowedKeys` (the key which was pressed) and move the player according to that input.

- The `Player` and `Enemy` classes and methods are implemented, now the classes are initiated by creating an  object to `Player` and creating several new Enemies objects and placing them in an array called `allEnemies`.

- The enemies move randomly on the screen with random speeds.

- On 3 collisions between `Player` and any `Enemy` the game ends and displays a popup asking to replay the game.

- On clicking the arrow keys the `Player` is made to move according to the key pressed.

- On reaching to water a popup is displayed to Congratulate the player on reaching the destination.

 - By hitting `Enter` button on keyboard or by clicking ***Enter*** text displayed on canvas the player character changes randomly.

-----------------

## Game rules

* You will have 3 lives at beginning, if you touch a bug you loose one life.

* On collision with a bug the `player` comes back to its initial position.

* Reaching the **Water** wins the game.

>Use arrow keys to move the `player`.

--------------------------------

## How to play

- The basic view of **Arcade Game Project** is:

  ![screenshot](./images/arcade-game.png)

- The goal of the player is to reach the water, without colliding into any one of the enemies.

-  The player can move left, right, up and down.

-  The enemies move in varying speeds on the paved block portion of the scene.

- Once a the player collides with an enemy(more than 3 times), the game is reset and the player moves back to the start square.

- Once the player reaches the water the game is won  

-----------------------------

## Additional functionality

- Some additional features that one can add:

####	Player selection:
        - Allow the user to select the image for the player character before starting the game.
        - We can use the different character images provided in the images folder.

### Score:
        - We can implement a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced).

### Collectibles:
        - We can add gems to the game, allowing the `player` to collect them to make the game more interesting.

---------------

## Benefits

- We will learn JavaScript’s object oriented programming features to write eloquently designed classes capable of creating countless instances of similarly functioning objects.

- We will discover a variety of ways inheritance and delegation can be used to create well architected and performant applications.

------------------------

## Tools used

- Object-Oriented JavaScript Scopes, closures and prototype chains The 'this' keyword Superclasses and subclasses HTML5 Canvas.

----------------------------

## Contributing

This repository is the starter code for _all_ coders who are interested in Object Oriented JavaScript.
