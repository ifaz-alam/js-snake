// Constants for board dimensions and block size
var _a = [20, 10], rows = _a[0], cols = _a[1];
var blockSize = 25;
// Variables for canvas and its context
var board;
var context;
// Snake Information
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var snakeBody = [];
var directionX = 1;
var directionY = 0;
// Food Information
var foodX = blockSize * 10;
var foodY = blockSize * 10;
// Function to update canvas content (main game loop)
var gameLoop = function () {
    if (context && board) {
        // Clear the canvas
        context.fillStyle = "black";
        context.fillRect(0, 0, board.width, board.height);
        // Draw the snake's head
        snakeX += directionX * blockSize;
        snakeY += directionY * blockSize;
        context.fillStyle = "lime";
        context.fillRect(snakeX, snakeY, blockSize, blockSize);
        // Draw the snake's body
        for (var i = 0; i < snakeBody.length; i++) {
            context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        }
        // Consume food
        if (snakeX === foodX && snakeY === foodY) {
            snakeBody.push([foodX, foodY]);
            updateFoodPosition();
        }
        // Draw the food
        context.fillStyle = "red";
        context.fillRect(foodX, foodY, blockSize, blockSize);
    }
};
/**
 * A helper function to update the position of the food
 * If the potential position overlaps with the snake head, the food position is recalculate until this is not the case.
 */
var updateFoodPosition = function () {
    var newFoodX;
    var newFoodY;
    do {
        newFoodX = blockSize * Math.floor(Math.random() * cols);
        newFoodY = blockSize * Math.floor(Math.random() * rows);
    } while (newFoodX === snakeX && newFoodY === snakeY);
    foodX = newFoodX;
    foodY = newFoodY;
};
/**
 * Updates the global variables representing the direction vector of the snake based on the recently pressed key.
 * Ensures that the snake cannot move in the opposite direction of its current movement.
 * Note: The positive y-axis is defined as downwards, and the negative y-axis is defined as upwards.
 * @param e The keyup event containing information about the recently pressed key.
 */
var updateSnakeDirection = function (e) {
    if (e.code === "ArrowUp" && directionY != 1) {
        directionX = 0;
        directionY = -1;
    }
    else if (e.code === "ArrowDown" && directionY != -1) {
        directionX = 0;
        directionY = 1;
    }
    else if (e.code === "ArrowLeft" && directionX != 1) {
        directionX = -1;
        directionY = 0;
    }
    else if (e.code === "ArrowRight" && directionX != -1) {
        directionX = 1;
        directionY = 0;
    }
};
// Window onload event handler
window.onload = function () {
    board = document.getElementById("board");
    if (board) {
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context = board.getContext("2d");
        document.addEventListener("keyup", updateSnakeDirection);
        updateFoodPosition();
        setInterval(gameLoop, 100); // 100ms
    }
};
