const boxs = document.querySelectorAll(".box");
const start = document.querySelector(".start");
const score = document.querySelector(".score span");
let snake = [0, 1, 2];
let direction = 1;
let rands = Math.round(Math.random() * boxs.length - 1);
let first;
let len = 2;
let scores = 0;
let speed = 1000;
let action;
score.innerHTML = scores;
const game = () => {
  start.addEventListener("click", () => {
    snake.forEach((e) => boxs[e].classList.remove("color"));
    boxs[rands].classList.remove("food");
    clearInterval(action);
    scores = 0;
    snake = [0, 1, 2];
    direction = 1;
    speed = 1000;
    action = setInterval(move, speed);
    snake.forEach((e) => {
      boxs[e].classList.add("color");
    });
  });
};

const move = () => {
  Stop();
  food();
  len = snake.length - 1;
  var last = snake[len] + direction;

  //food()
  snake.push(last);

  first = snake.shift();
  let a = boxs[first].classList.remove("color");

  snake.forEach((e) => {
    boxs[e].classList.add("color");
  });

  console.log(snake);
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38 && direction !== 20) {
    direction = -20;
  }
  if (e.keyCode === 40 && direction !== -20) {
    direction = 20;
  }
  if (e.keyCode === 39 && direction !== -1) {
    direction = 1;
  }
  if (e.keyCode === 37 && direction !== 1) {
    direction = -1;
  }
});

const Stop = () => {
  if ((snake[len] < 0 )|| (snake[len] > 399 && direction ===10) ) {
    return clearInterval(action);
  }
  if (
    (snake[len] % 20 === 0 && direction === -1) ||
    (snake[len] % 20 === 19 && direction === 1) ||
    boxs[snake[len] + direction].classList.contains("color")
  ) {
    return clearInterval(action);
  }
};

const food = () => {
  let p = snake[len];
  if (boxs[p].classList.contains("food")) {
    boxs[rands].classList.remove("food");
    rands = Math.round(Math.random() * boxs.length - 1);
    snake.unshift(first);
    if(speed === 100){
       return speed = 100
    }else{
    speed -= 100;}
    console.log(speed)
    clearInterval(action);
    action = setInterval(() => {
      move();
    }, speed);
    scores += 1;
    score.innerHTML = scores;
  }
  boxs[rands].classList.add("food");
};

game();
