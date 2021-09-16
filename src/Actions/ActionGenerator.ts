export type EosioAuthorizationObject = { actor: string, permission: string };
export type EosioActionObject = {
    account: string,
    name: string,
    authorization: EosioAuthorizationObject[],
    data: any
};

/* tslint:disable:variable-name */

export class ActionGenerator {
    constructor(readonly contract: string, readonly token_contract: string) {
    }

    async crtesyspool(authorization: EosioAuthorizationObject[], receiver: string, description: string, is_stake_available: boolean): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'crtesyspool', {receiver, description, is_stake_available});
    }

    async crtgatepool(authorization: EosioAuthorizationObject[], creator: string, receiver: string, description: string, is_stake_available: boolean): Promise<EosioActionObject[]> {
        let jsonArray1 = this._pack(this.token_contract, authorization, 'transfer', {from: creator, to: this.contract, quantity: '', memo: ''});
        let jsonArray2 = this._pack(this.contract, authorization, 'crtgatepool', {creator, receiver, description, is_stake_available});
        jsonArray1 = jsonArray1.concat(jsonArray2);
        return jsonArray1;
    }

    async crtmoodpool(authorization: EosioAuthorizationObject[], creator: string, receiver: string, description: string, is_stake_available: boolean): Promise<EosioActionObject[]> {
        let jsonArray1 = this._pack(this.token_contract, authorization, 'transfer', {from: creator, to: this.contract, quantity: '', memo: ''});
        let jsonArray2 = this._pack(this.contract, authorization, 'crtmoodpool', {creator, receiver, description, is_stake_available});
        jsonArray1 = jsonArray1.concat(jsonArray2);
        return jsonArray1;
    }

    async crtnftpool(authorization: EosioAuthorizationObject[], creator: string, receiver: string, description: string, is_stake_available: boolean): Promise<EosioActionObject[]> {
        let jsonArray1 = this._pack(this.token_contract, authorization, 'transfer', {from: creator, to: this.contract, quantity: '', memo: ''});
        let jsonArray2 = this._pack(this.contract, authorization, 'crtnftpool', {creator, receiver, description, is_stake_available});
        jsonArray1 = jsonArray1.concat(jsonArray2);
        return jsonArray1;
    }

    async crtpwruppool(authorization: EosioAuthorizationObject[], creator: string, receiver: string, to: string, is_stake_available: boolean): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'crtpwruppool', {creator, receiver, to, is_stake_available});
    }

    async addgatewhlst(authorization: EosioAuthorizationObject[], pool_id: number, user: string): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'addgatewhlst', {pool_id, user});
    }
    
    async addmoodwhlst(authorization: EosioAuthorizationObject[], pool_id: number, user: string): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'addmoodwhlst', {pool_id, user});
    }

    async addnftwhlst(authorization: EosioAuthorizationObject[], pool_id: number, user: string): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'addnftwhlst', {pool_id, user});
    }

    async stakeesystem(authorization: EosioAuthorizationObject[], from: string, quantity: string, pool_id: string): Promise<EosioActionObject[]> {
        return this._pack(this.token_contract, authorization, 'transfer', {from: from, to: this.contract, quantity: quantity, memo: 'ecosystem:'+ pool_id});
    }

    async stakegate(authorization: EosioAuthorizationObject[], from: string, quantity: string, pool_id: string): Promise<EosioActionObject[]> {
        return this._pack(this.token_contract, authorization, 'transfer', {from: from, to: this.contract, quantity: quantity, memo: 'gate:'+ pool_id});
    }

    async stakemood(authorization: EosioAuthorizationObject[], from: string, quantity: string, pool_id: string): Promise<EosioActionObject[]> {
        return this._pack(this.token_contract, authorization, 'transfer', {from: from, to: this.contract, quantity: quantity, memo: 'mood:'+ pool_id});
    }

    async stakenft(authorization: EosioAuthorizationObject[], from: string, quantity: string, pool_id: string): Promise<EosioActionObject[]> {
        return this._pack(this.token_contract, authorization, 'transfer', {from: from, to: this.contract, quantity: quantity, memo: 'nft:'+ pool_id});
    }

    async stakepowerup(authorization: EosioAuthorizationObject[], from: string, quantity: string, pool_id: string): Promise<EosioActionObject[]> {
        return this._pack(this.token_contract, authorization, 'transfer', {from: from, to: this.contract, quantity: quantity, memo: 'powerup:'+ pool_id});
    }

    async unstakegate(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'unstakegate', {pool_id, stake_id});
    }
    
    async unstakemood(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'unstakemood', {pool_id, stake_id});
    }

    async unstakenft(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'unstakenft', {pool_id, stake_id});
    }

    async clmgatestake(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'clmgatestake', {pool_id, stake_id});
    }
    
    async clmmoodstake(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'clmmoodstake', {pool_id, stake_id});
    }

    async clmnftstake(authorization: EosioAuthorizationObject[], pool_id: number, stake_id: number): Promise<EosioActionObject[]> {
        return this._pack(this.contract, authorization, 'clmnftstake', {pool_id, stake_id});
    }

    protected _pack(account: string, authorization: EosioAuthorizationObject[], name: string, data: any): EosioActionObject[] {
        return [{account, name, authorization, data}];
    }
}