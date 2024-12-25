import { BitcoinCore } from './BitcoinCore';

export class MiningRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // getblocktemplate
    public async getBlockTemplate(params: any = {}): Promise<any> {
        return this.bitcoinCore.callMethod('getblocktemplate', [params]);
    }

    // getmininginfo
    public async getMiningInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getmininginfo');
    }

    // getnetworkhashps
    public async getNetworkHashPs(
        blocks: number = 120,
        height: number = -1
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getnetworkhashps', [
            blocks,
            height,
        ]);
    }

    // prioritisetransaction
    public async prioritizeTransaction(
        txid: string,
        fee_delta: number,
        conf_target: number
    ): Promise<any> {
        return this.bitcoinCore.callMethod('prioritisetransaction', [
            txid,
            fee_delta,
            conf_target,
        ]);
    }

    // submitblock
    public async submitBlock(
        blockdata: string,
        params: any = {}
    ): Promise<any> {
        return this.bitcoinCore.callMethod('submitblock', [blockdata, params]);
    }

    // submitheader
    public async submitHeader(header: string): Promise<any> {
        return this.bitcoinCore.callMethod('submitheader', [header]);
    }
}
