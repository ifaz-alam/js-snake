// Constants for board dimensions and block size
var _a = [20, 10], rows = _a[0], cols = _a[1];
var blockSize = 25;
// Variables for canvas and its context
var board;
var context;
// Snake Information
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
// Function to update canvas content
var update = function () {
    if (context && board) {
        // Clear the canvas
        context.fillStyle = "black";
        context.fillRect(0, 0, board.width, board.height);
        // Draw the snake
        context.fillStyle = "lime";
        context.fillRect(snakeX, snakeY, blockSize, blockSize);
    }
};
// Window onload event handler
window.onload = function () {
    board = document.getElementById("board");
    if (board) {
        board.height = rows * blockSize;
        board.width = cols * blockSize;
        context = board.getContext("2d");
        update();
    }
};
