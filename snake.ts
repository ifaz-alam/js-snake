// Constants for board dimensions and block size
const [rows, cols]: [number, number] = [20, 10];
const blockSize: number = 25;

// Variables for canvas and its context
let board: HTMLCanvasElement | null;
let context: CanvasRenderingContext2D | null;

// Snake Information
let snakeX: number = blockSize * 5;
let snakeY: number = blockSize * 5;

// Food Information
let foodX: number = blockSize * 10;
let foodY: number = blockSize * 10;

// Function to update canvas content (main game loop)
const gameLoop = () => {
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
const updateFoodPos = () => {
  let newFoodX: number;
  let newFoodY: number;

  do {
    newFoodX = blockSize * Math.floor(Math.random() * cols);
    newFoodY = blockSize * Math.floor(Math.random() * rows);
  } while (newFoodX === snakeX && newFoodY === snakeY);

  foodX = newFoodX;
  foodY = newFoodY;
};

// Window onload event handler
window.onload = () => {
  board = document.getElementById("board") as HTMLCanvasElement | null;

  if (board) {
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    gameLoop();
  }
};
