# Snake Game

This is a simple implementation of the classic Snake game using HTML canvas and JavaScript. The JavaScript code was transpiled from TypeScript.

## Gameplay

- Use the arrow keys (up, down, left, right) to control the direction of the snake.
- The snake moves continuously in the direction it's facing.
- The goal is to eat as much food as possible without colliding with the snake's body or the game boundaries.

## Features

- **Canvas Rendering**: The game is rendered on an HTML canvas element using the [Canvas API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
- **Snake Movement**: The snake's movement is controlled by user input.
- **Food Generation**: Food items appear randomly on the game board for the snake to eat.
- **Collision Detection**: The game checks for collisions between the snake's head, its body, and the game boundaries to determine the end of the game.

## Instructions

1. Open the `index.html` file in your web browser.
2. Use the arrow keys to control the snake.
3. Eat as much food as you can without crashing into the walls or yourself
4. Enjoy the game

## Implementation Details

- The game board consists of a grid with dimensions specified by the `rows` and `cols` constants.
- Each block on the grid has a fixed size specified by the `blockSize` constant.
- The snake's position, body segments, and movement direction are tracked using global variables.
- The game loop continuously updates the game state, renders changes to the canvas, and checks for collisions.
