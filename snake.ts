// Constants for board dimensions and block size
const [rows, cols]: [number, number] = [20, 10];
const blockSize: number = 25;

// Variables for canvas and its context
let board: HTMLCanvasElement | null;
let context: CanvasRenderingContext2D | null;

// Snake Information
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// Function to update canvas content
const update = () => {
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
window.onload = () => {
  board = document.getElementById("board") as HTMLCanvasElement | null;

  if (board) {
    board.height = rows * blockSize;
    board.width = cols * blockSize;

    context = board.getContext("2d");

    update();
  }
};
