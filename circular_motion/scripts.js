let angle = 0;
const x = 210;
const y = 210;
const radius = 250;

const changePosition = () => {
    angle += 0.015;
    let X = x + radius * Math.cos(angle);
    let Y = y + radius * Math.sin(angle);
    ball.style.left = X + "px";
    ball.style.top = Y + "px";
    
}

const startButton = document.createElement("button");
const stopButton = document.createElement("button")
const bigCircle = document.createElement("div");
const ball = document.createElement("div");

startButton.innerHTML = "Start";
stopButton.innerHTML = "Stop"; 

bigCircle.setAttribute("class", "big");
ball.setAttribute("class", "ball");

let interval = 0;
startButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(changePosition, 5);
});
stopButton.addEventListener("click", () => {
    clearInterval(interval);
});


document.body.appendChild(startButton)
document.body.appendChild(stopButton);
document.body.appendChild(bigCircle);
bigCircle.appendChild(ball);


