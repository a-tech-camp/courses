# Node

Node is a server side framework for running javascript. Node is built on top of Chrome's V8 Engine and as such will have similar performance.

## Installation
For node and npm install, visit the [website](https://nodejs.org/en/download/)

This will install the node cli
- terminal on Mac
- gitbash? command prompt? on windows

### Confirming
#### Versions
```sh`
node --version
node -v # shorthand
```
should give a version where the first number is 12

Even numbered versions are the stable version. Odd numbered versions are the Canary in the Coal Mine.

### Shell
```sh
node
```
should open up a shell where we can execute javascript code like `console.log('hello world');`

### Troubleshooting
#### Finding File
```sh
which node
```
should describe a directory

#### Path
The path is a variable responsible for loading in all binary files. Calling these binary files will execute them.
To find the path:
```sh
echo $PATH
```
This string should be series of directories seperated by `:`. It should include the directory that contains the our node binary installation

#### More info
[Npm's Common Errors](https://docs.npmjs.com/common-errors)


## Running javascript files
To execute a javascipt file, you must be at the same directory as the file and type:
```sh
node index.js
```
You can replace index.js with your filename

## Debugging VS-Code
Add the following extensions to vs-code:
 - [node debug (legacy)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug)

Click on the symbol that looks like a Bug with a X on it. You should see a green triangle and a dropdown that has 3 options:
 - `Run File` will run the current file you are looking at
 - `Run Test` will run the current test you are looking at
 - `Run All Tests` will run all the tests

Clicking the green triangle will run whichever command you would like. You can also add breakpoints to your code by clicking on the very left of a line and seeing a red dot pop up. These breakpoints will stop your code at that point so you can see the state of your application.
