export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async open(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string,
    payer: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "open", {
      owner,
      symbol,
      payer
    });
  }

  async close(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbol: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "close", {
      owner,
      symbol
    });
  }

  async createPool(
    authorization: EosioAuthorizationObject[],
    owner: string,
    description: string,
    ticker: string,
    is_inflatable: boolean,
    is_deflatable: boolean,
    is_treasury: boolean
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "createpool", {
      owner,
      description,
      ticker,
      is_inflatable,
      is_deflatable,
      is_treasury
    });
  }

  async addToWhiteList(
    authorization: EosioAuthorizationObject[],
    pool_id: number,
    user: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addwhlst", {
      pool_id,
      user
    });
  }

  async rmvFromWhiteList(
    authorization: EosioAuthorizationObject[],
    pool_id: number,
    user: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvwhlst", {
      pool_id,
      user
    });
  }

  async stakeToPool(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string,
    pool_id: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.token_contract, authorization, "transfer", {
      from: from,
      to: this.contract,
      quantity: quantity,
      memo: "pool:" + pool_id,
    });
  }

  async withdrawFromPool(
    authorization: EosioAuthorizationObject[],
    owner: string,
    quantity: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "withdraw", {
      owner,
      quantity
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
