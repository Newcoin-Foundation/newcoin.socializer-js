export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

import * as types from "../types/index";

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async add(
    authorization: EosioAuthorizationObject[],
    account: string,
    supported_symbols: types.ExtendedSymbols
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "add", {
      account,
      supported_symbols
    });
  }

  async create(
    authorization: EosioAuthorizationObject[],
    creator: string,
    payouts: types.Payouts,
    supported_symbols: types.ExtendedSymbols
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "create", {
      creator,
      payouts,
      supported_symbols
    });
  }

  async withdraw(
    authorization: EosioAuthorizationObject[],
    owner: string,
    symbols: types.ExtendedSymbols
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "withdraw", {
      owner,
      symbols
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
