
# RutJS

Simple and small library of utilities to validate, generate and format the RUT. Works with CJS and ESM


## Badges

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]


[npm-version-src]: https://img.shields.io/npm/v/@rsgarate/rut?style=flat-square
[npm-version-href]: https://npmjs.com/package/@rsgarate/rut

[npm-downloads-src]: https://img.shields.io/npm/dm/@rsgarate/rut?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@rsgarate/rut

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/@rsgarate/rut/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/@rsgarate/rut/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@rsgarate/rut/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@rsgarate/rut

## Installation

Install package:

```bash
# npm
npm install @rsgarate/rut

# yarn
yarn install @rsgarate/rut

# pnpm
pnpm install @rsgarate/rut
```
    
## Usage/Examples

```javascript
//CJS
const {  clean, format, generate, getCheckDigit, isValid } = require('@rsgarate/rut')

//ESM
import {  clean, format, generate, getCheckDigit, isValid } from '@rsgarate/rut'


clean('16.155.435-9')   // '161554359'

format('161554359')    // '16.155.435-9'

generate()    // 207377929

getCheckDigit('15255657')    // 8

isValid('161554359')    // true
isValid('161554358')    // false

```


## Run Locally

* Clone this repository
* Install dependencies using pnpm install



## Running Tests

To run tests, run the following command

```bash
  pnpm test
```


## Authors

- [@ramsesgarate](https://www.github.com/ramsesgarate)

## License

Published under [MIT License](./LICENSE).
 
---
Made with 💛