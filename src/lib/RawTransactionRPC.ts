import { BitcoinCore } from './BitcoinCore';

export class RawTransactionRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // analyzepsbt
    public async analyzePsbt(psbt: string): Promise<any> {
        return this.bitcoinCore.callMethod('analyzepsbt', [psbt]);
    }

    // combinepsbt
    public async combinePsbt(psbts: string[]): Promise<any> {
        return this.bitcoinCore.callMethod('combinepsbt', [psbts]);
    }

    // combinerawtransaction
    public async combineRawTransaction(txns: string[]): Promise<string> {
        return this.bitcoinCore.callMethod('combinerawtransaction', [txns]);
    }

    // converttopsbt
    public async convertToPsbt(
        rawTx: string,
        sign: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('converttopsbt', [rawTx, sign]);
    }

    // createpsbt
    public async createPsbt(
        inputs: any[],
        outputs: any[],
        locktime: number = 0,
        replaceable: boolean = false
    ): Promise<string> {
        return this.bitcoinCore.callMethod('createpsbt', [
            inputs,
            outputs,
            locktime,
            replaceable,
        ]);
    }

    // createrawtransaction
    public async createRawTransaction(
        inputs: any[],
        outputs: any[],
        locktime: number = 0,
        replaceable: boolean = false
    ): Promise<string> {
        return this.bitcoinCore.callMethod('createrawtransaction', [
            inputs,
            outputs,
            locktime,
            replaceable,
        ]);
    }

    // decodepsbt
    public async decodePsbt(psbt: string): Promise<any> {
        return this.bitcoinCore.callMethod('decodepsbt', [psbt]);
    }

    // decoderawtransaction
    public async decodeRawTransaction(rawTx: string): Promise<any> {
        return this.bitcoinCore.callMethod('decoderawtransaction', [rawTx]);
    }

    // decodescript
    public async decodeScript(script: string): Promise<any> {
        return this.bitcoinCore.callMethod('decodescript', [script]);
    }

    // finalizepsbt
    public async finalizePsbt(psbt: string): Promise<any> {
        return this.bitcoinCore.callMethod('finalizepsbt', [psbt]);
    }

    // fundrawtransaction
    public async fundRawTransaction(
        rawTx: string,
        options: any = {}
    ): Promise<any> {
        return this.bitcoinCore.callMethod('fundrawtransaction', [
            rawTx,
            options,
        ]);
    }

    // getrawtransaction
    public async getRawTransaction(
        txid: string,
        verbose: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getrawtransaction', [
            txid,
            verbose,
        ]);
    }

    // joinpsbts
    public async joinPsbts(psbts: string[]): Promise<string> {
        return this.bitcoinCore.callMethod('joinpsbts', [psbts]);
    }

    // sendrawtransaction
    public async sendRawTransaction(rawTx: string): Promise<string> {
        return this.bitcoinCore.callMethod('sendrawtransaction', [rawTx]);
    }

    // signrawtransactionwithkey
    public async signRawTransactionWithKey(
        rawTx: string,
        privKeys: string[],
        prevTxs: any[] = [],
        hashType: string = 'ALL'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('signrawtransactionwithkey', [
            rawTx,
            privKeys,
            prevTxs,
            hashType,
        ]);
    }

    // testmempoolaccept
    public async testMempoolAccept(rawTx: string): Promise<any> {
        return this.bitcoinCore.callMethod('testmempoolaccept', [rawTx]);
    }

    // utxoupdatepsbt
    public async utxoUpdatePsbt(psbt: string, utxos: any[]): Promise<string> {
        return this.bitcoinCore.callMethod('utxoupdatepsbt', [psbt, utxos]);
    }
}
