import { GetTableRowsPayload } from "./../../interfaces/chain.interface";
import {
  PoolPayload,
  PowerUpPoolPayload,
} from "./../../interfaces/pool.interface";
import { SponcorPayload } from "./../../interfaces/sponcor.interface";
import { WhiteListPayload } from "./../../interfaces/whitelist.interface";

export default class RpcApi {
  readonly nodeos_url: string;
  readonly pools_contract: string;

  constructor(nodeos_url: string, pools_contract: string) {
    this.nodeos_url = nodeos_url;
    this.pools_contract = pools_contract;
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getEcosystemPool(opts: PoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "ecosystems",
        table_key: opts.id,
      });
    } else if (opts.creator) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "ecosystems",
        table_key: opts.creator,
        lower_bound: opts.creator,
        upper_bound: opts.creator,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.receiver) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "ecosystems",
        table_key: opts.receiver,
        lower_bound: opts.receiver,
        upper_bound: opts.receiver,
        key_type: "name",
        index_position: "tertiary",
      });
    } else if (opts.description_sha256) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "ecosystems",
        table_key: opts.description_sha256,
        lower_bound: opts.description_sha256,
        upper_bound: opts.description_sha256,
        key_type: "sha256",
        index_position: "fourth",
      });
    }
  }

  async getGatePool(opts: PoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "gates",
        table_key: id,
      });
    } else if (opts.creator) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "gates",
        table_key: opts.creator,
        lower_bound: opts.creator,
        upper_bound: opts.creator,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.receiver) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "gates",
        table_key: opts.receiver,
        lower_bound: opts.receiver,
        upper_bound: opts.receiver,
        key_type: "name",
        index_position: "tertiary",
      });
    } else if (opts.description_sha256) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "gates",
        table_key: opts.description_sha256,
        lower_bound: opts.description_sha256,
        upper_bound: opts.description_sha256,
        key_type: "sha256",
        index_position: "fourth",
      });
    }
  }

  async getMoodPool(opts: PoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "moods",
        table_key: id,
      });
    } else if (opts.creator) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "moods",
        table_key: opts.creator,
        lower_bound: opts.creator,
        upper_bound: opts.creator,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.receiver) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "moods",
        table_key: opts.receiver,
        lower_bound: opts.receiver,
        upper_bound: opts.receiver,
        key_type: "name",
        index_position: "tertiary",
      });
    } else if (opts.description_sha256) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "moods",
        table_key: opts.description_sha256,
        lower_bound: opts.description_sha256,
        upper_bound: opts.description_sha256,
        key_type: "sha256",
        index_position: "fourth",
      });
    }
  }

  async getNFTPool(opts: PoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "nfts",
        table_key: id,
      });
    } else if (opts.creator) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "nfts",
        table_key: opts.creator,
        lower_bound: opts.creator,
        upper_bound: opts.creator,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.receiver) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "nfts",
        table_key: opts.receiver,
        lower_bound: opts.receiver,
        upper_bound: opts.receiver,
        key_type: "name",
        index_position: "tertiary",
      });
    } else if (opts.description_sha256) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "nfts",
        table_key: opts.description_sha256,
        lower_bound: opts.description_sha256,
        upper_bound: opts.description_sha256,
        key_type: "sha256",
        index_position: "fourth",
      });
    }
  }

  async getPowerUpPool(opts: PowerUpPoolPayload): Promise<any> {
    if (opts.id) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "powerups",
        table_key: id,
      });
    } else if (opts.creator) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "powerups",
        table_key: opts.creator,
        lower_bound: opts.creator,
        upper_bound: opts.creator,
        key_type: "name",
        index_position: "secondary",
      });
    } else if (opts.receiver) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "powerups",
        table_key: opts.receiver,
        lower_bound: opts.receiver,
        upper_bound: opts.receiver,
        key_type: "name",
        index_position: "tertiary",
      });
    } else if (opts.to) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: this.pools_contract,
        table: "powerups",
        table_key: opts.to,
        lower_bound: opts.to,
        upper_bound: opts.to,
        key_type: "name",
        index_position: "fourth",
      });
    }
  }

  async getGateWhiteList(opts: WhiteListPayload): Promise<any> {
    if (opts.user) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "gatewhtlst",
        table_key: opts.user,
      });
    } else {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "gatewhtlst",
      });
    }
  }

  async getMoodWhiteList(opts: WhiteListPayload): Promise<any> {
    if (opts.user) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "moodwhtlst",
        table_key: opts.user,
      });
    } else {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "moodwhtlst",
      });
    }
  }

  async getNFTWhiteList(opts: WhiteListPayload): Promise<any> {
    if (opts.user) {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "nftwhtlst",
        table_key: opts.user,
      });
    } else {
      return this.getTableRows({
        code: this.pools_contract,
        scope: opts.pool_id,
        table: "nftwhtlst",
      });
    }
  }

   async getEcosystemSponcor(opts: SponcorPayload): Promise<any> {
        if (opts.owner) {
        return this.getTableRows({
            code: this.pools_contract,
            scope: opts.pool_id,
            table: "ecosyssprs",
            table_key: opts.owner,
        });
        } else {
        return this.getTableRows({
            code: this.pools_contract,
            scope: opts.pool_id,
            table: "ecosyssprs",
        });
       }
    }

    async getGateSponcor(opts: SponcorPayload): Promise<any> {
        if (opts.owner) {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "gatesprs",
                table_key: opts.owner,
            });
        } else {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "gatesprs",
            });
        }
    }

    async getMoodSponcor(opts: SponcorPayload): Promise<any> {
        if (opts.owner) {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "moodsprs",
                table_key: opts.owner,
            });
        } else {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "moodsprs",
            });
        }
    }

    async getNFTSponcor(opts: SponcorPayload): Promise<any> {
        if (opts.owner) {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "nftsprs",
                table_key: opts.owner,
            });
        } else {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "nftsprs",
            });
        }
    }

    async getPowerUpSponcor(opts: SponcorPayload): Promise<any> {
        if (opts.owner) {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "powerupsprs",
                table_key: opts.owner,
            });
        } else {
            return this.getTableRows({
                code: this.pools_contract,
                scope: opts.pool_id,
                table: "powerupsprs",
            });
        }
    }
