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
    owner: "testalice.io",
    description_sha256:
      "dfddb9d6cf44c9a15c672e186248035b782e1bbfdd332352311983c3ab635ca5",
  };

  const exampleWhiteList: WhiteListPayload = {
    pool_id: "1",
    user: "nco",
  };

  const exampleCurrency: GetCurrencyBalance = {
    code: "pools.nco",
    account: "nco",
    symbol: "CA",
  };

  const exampleStats: GetCurrencyStats = {
    code: "pools.nco",
    symbol: "CA",
  };

  it("fetch CA token balance by account:" + exampleCurrency.account, async () => {
    const response = await api.getCurrencyBalance(exampleCurrency);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch CA stats:", async () => {
    const response = await api.getCurrencyStats(exampleStats);
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

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

  it("fetch pool by owner:testalice.io", async () => {
    const testAlice: PoolPayload = {
      owner: 'testalice.io'
    }
    const response = await api.getPoolByOwner(testAlice);
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
