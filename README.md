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
const { ActionGenerator, RpcApi } = require("@newcoin-foundation/newcoin.socializer-js");

// ES6 import
import { ActionGenerator, RpcApi } from "@newcoin-foundation/newcoin.socializer-js"
```

## Documentation

```javascript
const api = new RpcApi("https://nodeos.newcoin.org", "social.nco", fetch);
const response = await api.getPayouts();
const json = await response.json();
console.log(JSON.stringify(json));
```

```javascript
const generator = new ActionGenerator("social.nco");
const authorization = { "account":"socialowner1", "permission":"active" };
const creator = "socialowner1";
const payouts = [
    {
        "account": "socialowner1",
        "percentage": 0.5
    },
    {
        "account": "socialowner2",
        "percentage": 0.5
    }
];
const supported_symbols = [
    {
        "sym": "4,NCO",
        "contract": "eosio.token"
    }
];
const action = generator.create(
    authorization,
    creator,
    payouts,
    supported_symbols
);
console.log(JSON.stringify(action));
```

### RpcAapi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions  which can be pushed on chain with eosjs.