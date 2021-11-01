import { doesNotMatch } from "assert";
import { expect } from "chai";
import RpcApi from "../../src/api/index";
import {
  GetCurrencyStats,
  GetCurrencyBalance,
  GetTableRowsPayload,
} from "../../src/interfaces/chain.interface";
import { PoolPayload } from "../../src/interfaces/pool.interface";
import { WhiteListPayload } from "../../src/interfaces/whitelist.interface";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("RPC API", () => {
  const api = new RpcApi("https://testnet.newcoin.org", "pools.nco", fetch);

  const examplePool: PoolPayload = {
    id: "1",
    code: "CA",
    owner: "nco",
    description_sha256:
      "b3aed1b471c967e45fac0596f1240c68ca27978faf0e304cda500774752ba0a4",
  };

  const exampleWhiteList: WhiteListPayload = {
    pool_id: "1",
    user: "nco",
  };

  const ncoCurrency: GetCurrencyBalance = {
    code: "eosio.token",
    account: "nco",
    symbol: "4,NCO",
  };

  it("fetch pool by id:" + examplePool.id, async () => {
    const response = await api.getPool(examplePool);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch pool by code:" + examplePool.code, async () => {
    const response = await api.getPoolByCode(examplePool);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch pool by owner:" + examplePool.owner, async () => {
    const response = await api.getPoolByOwner(examplePool);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it(
    "fetch pool by description sha256:" + examplePool.description_sha256,
    async () => {
      const response = await api.getPoolByDescription(examplePool);
      const json = await response.json();
      console.log(json);
      // expect(pool).to.deep.equal(examplePool);
    }
  ).timeout(2000);

  it("fetch white list by pool id:" + exampleWhiteList.pool_id, async () => {
    const response = await api.getWhiteList(exampleWhiteList);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it(
    "fetch white list by pool id:" +
      exampleWhiteList.pool_id +
      "and user:" +
      exampleWhiteList.user,
    async () => {
      const response = await api.getWhiteListByUser(exampleWhiteList);
      const json = await response.json();
      console.log(json);
      // expect(pool).to.deep.equal(examplePool);
    }
  ).timeout(2000);
});
