let angle = 0;
let x = 210;
let y = 210;
let r = 250;

const startRotation = () => {
    angle = (angle + Math.PI / 360) % (Math.PI * 2); 
    X = x + r * Math.cos(angle);
    Y = y + r * Math.sin(angle);
    ball.style.left = X + "px";
    ball.style.top = Y + "px";
    
}

let interval = 0;

const startInterval = () => {
    clearInterval(interval)
    interval = setInterval(startRotation,5);
}

const stopRotation = () => {  
    clearInterval(interval);
}

const startButton = document.createElement("button");
const stopButton = document.createElement("button")
const bigCircle = document.createElement("div");
const ball = document.createElement("div");

startButton.innerHTML = "Start";
stopButton.innerHTML = "Stop"; 

bigCircle.setAttribute("class", "big");
ball.setAttribute("class", "ball");
startButton.addEventListener("click", startInterval);
stopButton.addEventListener("click", stopRotation);


document.body.appendChild(startButton)
document.body.appendChild(stopButton);
document.body.appendChild(bigCircle);
bigCircle.appendChild(ball);


