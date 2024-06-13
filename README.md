# Lodash-es Imports Performance Benchmark

This repository is designed to test the performance impact of using barrel file imports on unit tests in JavaScript. Inspired by recent discussions on the performance drawbacks of barrel files, such as in the article ["Speeding up the JavaScript ecosystem - The barrel file debacle"](Speeding up the JavaScript ecosystem - The barrel file debacle), we aim to provide concrete data through benchmarking.

## Running the Benchmark

To run the benchmark, simply clone this repository and execute the following command:

```bash
npm run benchmark
```

This command will run the same unit test suite both with and without the use of a barrel file. Each test suite is executed three times to ensure the accuracy and consistency of the results.

## Benchmark Methodology

The `node_modules` directory in this repository contains two versions of `lodash-es`:

1. **Standard Version**: The original version downloaded from npm.
2. **Modified Version**: This version has an additional entry in the `package.json`:
   ```json
   "exports": {
     ".": "./lodash.js",
     "./*": "./*.js"
   }
   ```
   This modification allows importing lodash functions directly from their source files.

The test suites perform basic type checks on each lodash function import to compare performance.

## Results

Below are the results from benchmarking on a MacBook Air with an M1 chip running Node.js v22.2.0:

|            | Barrel (s) | Subpath (s) |
| ---------- | ---------- | ----------- |
| **Run #1** | 24.29      | 7.51        |
| **Run #2** | 24.45      | 6.86        |
| **Run #3** | 24.75      | 7.14        |

Using subpath imports for lodash functions results in a performance improvement of over 3x compared to barrel file imports.
