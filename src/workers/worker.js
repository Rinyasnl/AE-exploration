
let counter = 0;

function incrementCounter() {
  counter++;
  postMessage(`Counter value: ${counter}`);
}


setInterval(incrementCounter, 1000);
