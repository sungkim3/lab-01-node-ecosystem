![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Resources  
* [Jest Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html)
* [Jest Globals](https://facebook.github.io/jest/docs/en/api.html#content)
* [Jest Expect](https://facebook.github.io/jest/docs/en/expect.html#content)

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Feature Tasks
#### Greet Module
Create a NodeJS module in the lib/ directory named `greet.js` that exports a single function. 
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

Greet is a function that takes one argument (expecting a string) and returns a concatenated 'hello ' with the string e.g. greet('Sung') returns 'hello Sung'. If the argument is a non string value, the greet function will return null

#### Arithmetic Module
Create a NodeJS module in the lib/ directory named `arithmetic.js` that exports an object. This module should have `add` and `sub` methods that implament addition and subtraction.  
* The `add` method should have an arity of two (define two paramiters)
  * If either parameter is a non-number the function should return null
  * Else return the sum of the 2 numbers
* The `sub` method should have an arity of two (define two paramiters)
  * If either parameter is a non-number the function should return null
  * Else return the second paramiter subtracted from the first paramiter

Arithmetic is an object that contains two functions: 'add' and 'sub'.
arithmetic.add is a function that takes two arguments (expecting two numbers) and returns a value that is an addition of the two
arithmetic.sub is a function that takes two arguments (expecting two numbers) and returns a value that is the difference of the two.
Both functions will return null if either argument is not a number, or if only one argument is provided.

## Testing  
#### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

#### Arithmetic Module Tests
* Test each method for proper use (invoded with number arguments)
* Test each method for inproper use (invoded with one or more non-numner arguments)

## Documentation  
In your README.md describe the exported values of each module defined in your lib/ directory. Every function description should include it's airty (expected number of paramiters), the expected data for each paramiter (data-type and limitations), and the it's output behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.