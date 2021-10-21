import { GetCurrencyStats, GetCurrencyBalance, GetTableRowsPayload } from "./../../interfaces/chain.interface";
import { PoolPayload } from "./../../interfaces/pool.interface";
import { WhiteListPayload } from "./../../interfaces/whitelist.interface";

export default class RpcApi {
  readonly nodeos_url: string;
  readonly pools_contract: string;

  constructor(nodeos_url: string, pools_contract: string) {
    this.nodeos_url = nodeos_url;
    this.pools_contract = pools_contract;
  }

  async getCurrencyStats(payload: GetCurrencyStats): Promise<any> {
    return await fetch(`${this.nodeos_url}/v1/chain/get_currency_stats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getCurrencyBalance(payload: GetCurrencyBalance): Promise<any> {
    return await fetch(`${this.nodeos_url}/v1/chain/get_currency_balance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getPool(opts: PoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "pools",
        table_key: opts.id,
      });
    } else if (opts.code) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "pools",
        table_key: opts.code,
        lower_bound: opts.code,
        upper_bound: opts.code,
        key_type: "i64",
        index_position: "secondary",
      });
    } else if (opts.owner) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "pools",
        table_key: opts.owner,
        lower_bound: opts.owner,
        upper_bound: opts.owner,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.description_sha256) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "pools",
        table_key: opts.description_sha256,
        lower_bound: opts.description_sha256,
        upper_bound: opts.description_sha256,
        key_type: "sha256",
        index_position: "fourth",
      });
    }
  }

  async getWhiteList(opts: WhiteListPayload): Promise<any> {
    if (opts.user) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "whitelist",
        table_key: opts.user,
      });
    } else {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "whitelist",
      });
    }
  }
}
