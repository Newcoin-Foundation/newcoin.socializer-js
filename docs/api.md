***

# getPayouts

### Parameters:
* @param owner - account to fetch balance for

### Description:

Return payouts object.

### Cleos Example:

```
cleos -u https://nodeos.newcoin.org get table social.nco social.nco payouts 
{
  "rows": [{
      "payouts": [{
          "account": "socialowner1",
          "percentage": "0.50000000000000000"
        },{
          "account": "socialowner2",
          "percentage": "0.50000000000000000"
        }
      ],
      "supported_symbols": [{
          "sym": "4,NCO",
          "contract": "eosio.token"
        }
      ]
    }
  ],
  "more": false,
  "next_key": ""
}
```

***

# getBalances

### Parameters:

### Description:

Return payouts object.

### Cleos Example:

```
cleos -u https://nodeos.newcoin.org get table social.nco socialowner1 balances
{
  "rows": [{
      "owner": "socialowner1",
      "assets": [{
          "quantity": "0.0000 NCO",
          "contract": "eosio.token"
        }
      ]
    }
  ],
  "more": false,
  "next_key": ""
}
```

***