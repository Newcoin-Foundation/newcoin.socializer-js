# newcoin.socializer-js

JS Library to read data from newcoin.socializer smart contract.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm i @newcoin-foundation/newcoin.socializer-js
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// Standard import
const { ActionGenerator, RpcApi } = require("newcoinsocializer");

// ES6 import
import { ActionGenerator, RpcApi } from "newcoinsocializer"
```

## Documentation

### RpcAapi
Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions  which can be pushed on chain with eosjs.