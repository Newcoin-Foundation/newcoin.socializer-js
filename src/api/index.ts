import { GetTableRowsPayload } from "../interfaces/chain.interface";
import { SocializerPayload } from "../interfaces/socializer.interface";

export default class RpcApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getPayouts(): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "payouts"
    });
  }

  async getBalances(opts: SocializerPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.owner,
      table: "payouts"
    });
  }
}
