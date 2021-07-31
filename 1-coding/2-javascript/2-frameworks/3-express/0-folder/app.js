// import express package. must have a node_modules/express/ folder
// To troubleshoot, see /1-courses/1-javascript/1-fundamentals/0-getting-started/2-npm/README.md
import express from 'express'; 

// Instantiate our app
const app = express(); 

// Here we define our app to share all the contents of our directory
// To see the output go to localhost:3000/index.html
// This is very 
app.use(express.static(__dirname + '/public')); 

// Here we start listening for incoming requests
app.listen(3000, () => console.log('Example app listening on port 3000!'));
