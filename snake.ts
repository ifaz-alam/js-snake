// Constants for board dimensions and block size
const [rows, cols]: [number, number] = [20, 20];
const blockSize: number = 25;

// Variables for canvas and its context
let board: HTMLCanvasElement | null;
let context: CanvasRenderingContext2D | null;

// Snake Information
let snakeX: number = blockSize * 5;
let snakeY: number = blockSize * 5;
let snakeBody: number[][] = []; // Last element represents Tail position
let directionX: number = 1;
let directionY: number = 0;

// Food Information
let foodX: number = blockSize * 10;
let foodY: number = blockSize * 10;

// Function to update canvas content (main game loop)
const gameLoop = () => {
  if (context && board) {
    // Clear the canvas
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    // Update the positions of the snake's body segments to follow the movement of the snake's head
    for (let i = snakeBody.length - 1; i >= 0; i--) {
      if (i === 0) {
        snakeBody[0] = [snakeX, snakeY];
      } else {
        snakeBody[i] = snakeBody[i - 1];
      }
    }

    // Draw the snake's head
    snakeX += directionX * blockSize;
    snakeY += directionY * blockSize;
    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Render Snake body from its upper body down to its tail
    for (let i = 0; i < snakeBody.length; i++) {
      context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    checkFailed();

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
 * A helper function to check if the Game is in a Fail state
 * The conditions for failing are:
 *	- 1. Going out of bounds
 * 	- 2. Having the snake head intersect with its body part
 */
const checkFailed = () => {
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    alert("Game Over");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
      alert("Game Over");
    }
  }
};

/**
 * A helper function to update the position of the food
 */
const updateFoodPosition = () => {
  let newFoodX: number;
  let newFoodY: number;

  newFoodX = blockSize * Math.floor(Math.random() * cols);
  newFoodY = blockSize * Math.floor(Math.random() * rows);

  foodX = newFoodX;
  foodY = newFoodY;
};

/**
 * Updates the global variables representing the direction vector of the snake based on the recently pressed key.
 * Ensures that the snake cannot move in the opposite direction of its current movement.
 * Note: The positive y-axis is defined as downwards, and the negative y-axis is defined as upwards.
 * @param e The keyup event containing information about the recently pressed key.
 */
const updateSnakeDirection = (e: { code: string }): void => {
  if (e.code === "ArrowUp" && directionY != 1) {
    directionX = 0;
    directionY = -1;
  } else if (e.code === "ArrowDown" && directionY != -1) {
    directionX = 0;
    directionY = 1;
  } else if (e.code === "ArrowLeft" && directionX != 1) {
    directionX = -1;
    directionY = 0;
  } else if (e.code === "ArrowRight" && directionX != -1) {
    directionX = 1;
    directionY = 0;
  }
};

// Window onload event handler
window.onload = () => {
  board = document.getElementById("board") as HTMLCanvasElement | null;

  if (board) {
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    document.addEventListener("keyup", updateSnakeDirection);

    updateFoodPosition();

    setInterval(gameLoop, 100); // 100ms
  }
};
