# Lodash-es imports performance benchmark

**No need to run npm install before running the benchmark**


Recently, articles such as ["Speeding up the JavaScript ecosystem - The barrel file debacle"](Speeding up the JavaScript ecosystem - The barrel file debacle) have showcased the negative impact of barrel files on the performance of javascript tooling. This repo was made to test the performance impact of the use of barrel file imports on unit tests.

## How to run the benchmark? 

Simply clone this repo and run `npm run benchmark`

This will run the same unit test suite both with and without the use of the barrel file. For both cases, the test suite is run 3 times to ensure the measured difference is not a fluke. 

## How is the benchmark done? 
The node modules contains two copies of `lodash-es`. One is the same as the one downloaded from npm, the other has this added to the package.json: 

```json
  "exports":{
    ".": "./lodash.js",
    "./*": "./*.js"
  }
```
This allows to import lodash function directly from the source file. 

The test suites consist of a basic test for every lodash function that will just perform a type check on the import. 

## Results

Here are the results for the benchmark performed on my laptop(M1 Macbook air - node v22.2.0): 

-------------------------------------------
|                 | Barrel (s)| Subpath (s)|
|-----------------|-----------|------------|
| Run #1          | 24.29     | 7.51       |
| Run #2          | 24.45     | 6.86       |
| Run #3          | 24.75     | 7.14       |
--------------------------------------------

Importing the functions via a subpath import results in a 3x+ improvement in speed. 
