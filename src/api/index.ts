import {
  GetCurrencyStats,
  GetCurrencyBalance,
  GetTableRowsPayload,
} from "../interfaces/chain.interface";
import { PoolPayload } from "../interfaces/pool.interface";
import { WhiteListPayload } from "../interfaces/whitelist.interface";

export default class RpcApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getCurrencyStats(payload: GetCurrencyStats): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_currency_stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getCurrencyBalance(payload: GetCurrencyBalance): Promise<any> {
    return await this.fetch(
      `${this.nodeos_url}/v1/chain/get_currency_balance`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getPool(opts: PoolPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "pools",
      table_key: opts.id,
      lower_bound: opts.id,
      upper_bound: opts.id,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getPoolByCode(opts: PoolPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "pools",
      table_key: opts.code,
      lower_bound: opts.code,
      upper_bound: opts.code,
      key_type: "i64",
      index_position: "2",
    });
  }

  async getPoolByOwner(opts: PoolPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "pools",
      table_key: opts.owner,
      lower_bound: opts.owner,
      upper_bound: opts.owner,
      key_type: "name",
      index_position: "3",
    });
  }

  async getPoolByDescription(opts: PoolPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "pools",
      table_key: opts.description_sha256,
      lower_bound: opts.description_sha256,
      upper_bound: opts.description_sha256,
      key_type: "sha256",
      index_position: "4",
    });
  }

  async getWhiteList(opts: WhiteListPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.pool_id,
      table: "whitelist",
    });
  }

  async getWhiteListByUser(opts: WhiteListPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.pool_id,
      table: "whitelist",
      table_key: opts.user,
      lower_bound: opts.user,
      upper_bound: opts.user,
      key_type: "name",
      index_position: "1",
    });
  }
}
