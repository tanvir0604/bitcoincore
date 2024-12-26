import { BitcoinCore } from './BitcoinCore';

export class MiningRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // getblocktemplate
    public async getBlockTemplate(templateRequest: {} = {}): Promise<any> {
        return this.bitcoinCore.callMethod('getblocktemplate', [
            templateRequest,
        ]);
    }

    // getmininginfo
    public async getMiningInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getmininginfo');
    }

    // getnetworkhashps
    public async getNetworkHashPs(
        nblocks: number = 120,
        height: number = -1
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getnetworkhashps', [
            nblocks,
            height,
        ]);
    }

    // prioritisetransaction
    public async prioritizeTransaction(
        txid: string,
        dummy: string = '',
        fee_delta: number
    ): Promise<any> {
        return this.bitcoinCore.callMethod('prioritisetransaction', [
            txid,
            dummy,
            fee_delta,
        ]);
    }

    // submitblock
    public async submitBlock(hexdata: string, dummy?: string): Promise<any> {
        return this.bitcoinCore.callMethod('submitblock', [hexdata, dummy]);
    }

    // submitheader
    public async submitHeader(hexdata: string): Promise<any> {
        return this.bitcoinCore.callMethod('submitheader', [hexdata]);
    }
}
