const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling is here but doesn't handle the response
    console.error(err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}