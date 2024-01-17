
let worker;

function startWorker() {
  if (typeof Worker !== 'undefined') {
    
    if (!worker) {
     
      worker = new Worker('worker.js');

     
      worker.onmessage = function (event) {
        document.getElementById('result').textContent = event.data;
      };
    } else {
      console.error('Worker is already running.');
    }
  } else {
    console.error('Web Workers are not supported in this browser.');
  }
}

function stopWorker() {
  if (worker) {
   
    worker.terminate();
    worker = undefined;
    document.getElementById('result').textContent = 'Worker terminated.';
  } else {
    console.error('No worker is running.');
  }
}
