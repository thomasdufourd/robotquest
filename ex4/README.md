# Exercise 4: Taking input from command-line (featuring _high order functions_)

We have here a nearly functional version of _robotquest_. This version implements the same features as [ex3](https://github.com/WeIgniteTech/robotquest/blob/master/ex3/README.md), plus the following feature: 
 - take input from the command-line: `m` to move and `ctrl+c` to exit
 - BUT does not understand yet the following: `r` to turn-right and `l` to turn-left


## How-to 
> You have to synchronize your forked repository with this present repository (the upstream), as your repository might not have the last updates. Make sure to follow the same instructions as in [ex3](https://github.com/WeIgniteTech/robotquest/blob/master/ex3/README.md#how-to) 
 

## Description of this exercise

### Open the files in IntelliJ
Just like [ex3](https://github.com/WeIgniteTech/robotquest/blob/master/ex3/README.md#open-the-files-in-intellij), open the content of `/home/vagrant/Code/robotquest/ex4` as a project in `IntelliJ` by doing like this: 
 - open `IntelliJ`
 - choose `open project`
 - navigate to `ex4` folder (it should be: `/home/vagrant/Code/robotquest/ex4`), and press `open`

This will open the code as an independent project. Go through the code. 


### Run the program
This version starts like the previous version in [ex3](https://github.com/WeIgniteTech/robotquest/blob/master/ex3/README.md#run-the-program)

Start from the `/home/vagrant/Code/robotquest/ex4` and type these commands: 
 - `npm install`. This command tells _npm_ to install all the necessary packages, as specified in the `package.json` file. The packages files are downloaded to the `node_modules` directory. 
 - `npm test`. This command runs the tests found in the `test` directory, usin `jest`. 
 - `node src/robotquest.js`: tells `node` to start the program `robotquest.js` 


### Taking input from the command-line
> The code that makes it possible to read from the command-line is taken from the __Node.js__ documentation. See [Example: Tiny CLI](https://nodejs.org/api/readline.html)   


For our _robotquest_ the code to take input form the command-line is basically like this: 

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '????> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'm':
      console.log('Move');
      break;
    //[...] Handle several cases here 
    default:
      console.log(`Not a known command ...'${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Bye...');
  process.exit(0);
});
```


