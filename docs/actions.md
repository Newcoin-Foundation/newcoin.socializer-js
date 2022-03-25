***

# open

### Parameters:
* @param owner - owner of account balance    
* @param symbol - token symbol
* @param payer - payer of RAM       

### Description:

Creates 0 balance account in balances table.

### Required Authorization:

**payer** account.

***

# close

### Parameters:

* @param owner - owner of account balance    
* @param symbol - token symbol

### Description:

Close 0 balance account in balances table.

### Required Authorization:

**owner** account.

***

# createPool

### Parameters:

* @param owner - owner of account balance    
* @param description - token symbol
* @param ticker - token symbol
* @param is_inflatable - token symbol
* @param is_deflatable - token symbol
* @param is_treasury - token symbol

### Description:

Create sub pool in pools table(token created automatic).

### Required Authorization:

**owner** account.

***

# addToWhiteList

### Parameters:

* @param pool_id - owner of account balance    
* @param user - token symbol

### Description:

Add user to pool white list.

### Required Authorization:

**owner of the pool** account.

***

# rmvFromWhiteList

### Parameters:

* @param pool_id - owner of account balance    
* @param user - token symbol

### Description:

Remove user from pool white list.

### Required Authorization:

**owner of the pool** account.

***

# stakeToPool

### Parameters:

* @param from - sender account
* @param quantity - quantity of tokens
* @param pool_id - id of the pool

### Description:

Stake to the pool.

### Required Authorization:

**from** account.

***

# withdrawFromPool

### Parameters:

* @param owner - sender account
* @param quantity - quantity of tokens

### Description:

Unstake from the pool.

### Required Authorization:

**owner** account.