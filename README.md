# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express.js applications where an unhandled promise rejection in an asynchronous route handler leads to a hanging request without a proper error response to the client.

## The Bug

The `bug.js` file contains an Express.js app with a route that performs an asynchronous operation.  If the asynchronous operation fails, the error is caught and logged, but the response to the client is never sent. This results in the client's request hanging indefinitely.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this situation.  It uses a `try...catch` block within the asynchronous operation and sends an appropriate error response to the client if an error occurs.  This ensures that the client receives feedback, even if the server-side operation fails.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install express.
4. Run `node bug.js` and make several requests to `/`.
5. Observe that some requests hang, due to unhandled promise rejection.
6. Run `node bugSolution.js` and make several requests to `/`. 
7. Observe that all requests are handled, even those that encounter errors. 