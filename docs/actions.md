***

# add

### Parameters:
* @param account - account to add supported symbols
* @param supported_symbols - array of symbols to add

### Description:

Add supported symbol(s) to socializer.

### Required Authorization:

**payer** account.

### Zeus Example:

```
await socializerContractInstance.add(
{
    account:creator,
    payouts: [
        {
            account: accounts[0],
            percentage: '0.5' 
        },
        {
            account: accounts[1],
            percentage: '0.5' 
        }
    ],
    supported_symbols: [
        {sym:"4,NCO",contract:"eosio.token"}
    ]
}, {
    authorization: `${creator}@active`,
    broadcast: true,
    sign: true,
    keyProvider: [keys[0].active.privateKey],
});
```

***

# create

### Parameters:
* @param creator - account to add supported symbols
* @param payouts - array of payouts
* @param supported_symbols - array of symbols to add

### Description:

Create socializer contract.

### Required Authorization:

**payer** creator.

### Zeus Example:

```
await socializerContractInstance.create(
{
    creator,
    payouts: [
        {
            account: accounts[0],
            percentage: '0.5' 
        },
        {
            account: accounts[1],
            percentage: '0.5' 
        }
    ],
    supported_symbols: [
        {sym:"4,NCO",contract:"eosio.token"}
    ]
}, {
    authorization: `${creator}@active`,
    broadcast: true,
    sign: true,
    keyProvider: [keys[0].active.privateKey],
});
```

### cleos Example:

```
cleos -u https://nodeos.newcoin.org push transaction '{
  "delay_sec": 0,
  "max_cpu_usage_ms": 0,
  "actions": [
    {
      "account": "social.nco",
      "name": "create",
      "data": {
        "creator": "socialowner1",
        "payouts": [
          {
            "account": "socialowner1",
            "percentage": 0.5
          },
          {
            "account": "socialowner2",
            "percentage": 0.5
          }
        ],
        "supported_symbols": [
          {
            "sym": "4,NCO",
            "contract": "eosio.token"
          }
        ]
      },
      "authorization": [
        {
          "actor": "socialowner1",
          "permission": "active"
        }
      ]
    }
  ]
}'
```

***

# withdraw

### Parameters:
* @param owner - owner to withdraw tokens
* @param symbols - symbol(s) of tokens to withdraw

### Description:

Withdraw tokens from socializer.

### Required Authorization:

**payer** owner.

### Zeus Example:

```
await socializerContractInstance.withdraw(
{
    owner: creator,
    symbols: [
        {sym:"4,NCO",contract:"eosio.token"}
    ]
}, {
    authorization: `${creator}@active`,
    broadcast: true,
    sign: true,
    keyProvider: [keys[0].active.privateKey],
});
```

***