import { doesNotMatch } from "assert";
import { expect } from "chai";
import RpcApi from "../../src/api/index";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("RPC API", () => {
  const api = new RpcApi("https://nodeos-dev.newcoin.org", "social.nco", fetch);

  const exampleOwner1: string = "socialowner1";
  const exampleOwner2: string = "socialowner2";

  it("fetch payouts", async () => {
    const response = await api.getPayouts();
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch payouts:" + exampleOwner1, async () => {
    const response = await api.getPayouts();
    const json = await response.json();
    console.log(json);
  }).timeout(2000);

  it("fetch payouts:" + exampleOwner2, async () => {
    const response = await api.getPayouts();
    const json = await response.json();
    console.log(json);
  }).timeout(2000);
});
