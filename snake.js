// Constants for board dimensions and block size
var _a = [20, 10], rows = _a[0], cols = _a[1];
var blockSize = 25;
// Variables for canvas and its context
var board;
var context;
// Snake Information
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
// Food Information
var foodX = blockSize * 10;
var foodY = blockSize * 10;
// Function to update canvas content (main game loop)
var gameLoop = function () {
    if (context && board) {
        // Clear the canvas
        context.fillStyle = "black";
        context.fillRect(0, 0, board.width, board.height);
        // Draw the snake
        context.fillStyle = "lime";
        context.fillRect(snakeX, snakeY, blockSize, blockSize);
        // Draw the food
        updateFoodPos();
        context.fillStyle = "red";
        context.fillRect(foodX, foodY, blockSize, blockSize);
    }
};
/**
 * A helper function to update the position of the food
 * If the potential position overlaps with the snake head, the food position is recalculate until this is not the case.
 */
var updateFoodPos = function () {
    var newFoodX;
    var newFoodY;
    do {
        newFoodX = blockSize * Math.floor(Math.random() * cols);
        newFoodY = blockSize * Math.floor(Math.random() * rows);
    } while (newFoodX === snakeX && newFoodY === snakeY);
    foodX = newFoodX;
    foodY = newFoodY;
};
// Window onload event handler
window.onload = function () {
    board = document.getElementById("board");
    if (board) {
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context = board.getContext("2d");
        gameLoop();
    }
};
