
# RutJS

Simple and small library of utilities to validate, generate and format the RUT. Works with CJS and ESM


## Badges

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]


[npm-version-src]: https://img.shields.io/npm/v/@dnijs/rut?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dnijs/rut

[npm-downloads-src]: https://img.shields.io/npm/dm/@dnijs/rut?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dnijs/rut

[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/@dnijs/rut/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/@dnijs/rut/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/@dnijs/rut/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/@dnijs/rut

## Installation

Install package:

```bash
# npm
npm install @dnijs/rut

# yarn
yarn install @dnijs/rut

# pnpm
pnpm install @dnijs/rut
```
    
## Usage/Examples

```javascript
//CJS
const {  clean, format, generate, getCheckDigit, isValid } = require('@dnijs/rut')

//ESM
import {  clean, format, generate, getCheckDigit, isValid } from '@dnijs/rut'


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