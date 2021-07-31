# Importing
We can also import local files. These packages will have to exist wherever we are running and be accessible by the protocol we are existing on.


## Works
Some of these files will be fine. Some will cause issues

### Node
```sh
node 1-courses/1-javascript/1-fundamentals/5-modules/1-importing/index.js
```
will run the file through node. Importing is not yet standard, but is enabled via: 
 - https://nodejs.org/api/esm.html

### Server
We can run 
```sh
node 1-courses/1-javascript/1-fundamentals/5-modules/1-importing/app.js
```
to create a server.
Then we navigate to [localhost:3000/index.html](localhost:3000/index.html) and we will not be getting an error. 
 
## Doesn't work
### Opening index.html
Opening [./index.js](./index.js) will cause us to have a CORS issue. CORS (Cross-Origin Resource Sharing) defines a limitation for how websites can communicate with each other. This is a security measure to prevent websites from accessing files through indirect means. In order to overcome this challenge, we should run a server.

