type Fetch = (input?: Request | string, init?: RequestInit) => Promise<Response>;

export default class RpcApi {
    readonly endpoint: string;
    readonly contract: string;

    // tslint:disable-next-line:variable-name

    constructor(endpoint: string, contract: string) {
        this.endpoint = endpoint;
        this.contract = contract;
    }

    async getEcosystemPool(id: string): Promise<Any> {
        return getTableRows(this.contract, this.contract, );
    }

    async getGatePool(id: string): Promise<Any> {
        return getTableRows(this.contract, this.contract, );
    }

    async getMoodPool(id: string): Promise<Any> {
        return getTableRows(this.contract, this.contract, );
    }

    async getNFTPool(id: string): Promise<Any> {
        return getTableRows(this.contract, this.contract, );
    }

    async getPowerUpPool(id: string): Promise<Any> {
        return getTableRows(this.contract, this.contract, );
    }

    async getTableRows({
       code, scope, table, table_key = '', lower_bound = '', upper_bound = '',
       index_position = 1, key_type = ''}: any): Promise<any> {
        return await fetch('/v1/chain/get_table_rows', {
            code, scope, table, table_key,
            lower_bound, upper_bound, index_position,
            key_type, limit: 101, reverse: false, show_payer: false, json: true
        });
    }
}