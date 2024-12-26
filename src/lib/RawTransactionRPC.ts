import { BitcoinCore } from './BitcoinCore';

export class RawTransactionRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // analyzepsbt
    public async analyzePsbt(psbt: string): Promise<any> {
        return this.bitcoinCore.callMethod('analyzepsbt', [psbt]);
    }

    // combinepsbt
    public async combinePsbt(txs: string[]): Promise<any> {
        return this.bitcoinCore.callMethod('combinepsbt', [txs]);
    }

    // combinerawtransaction
    public async combineRawTransaction(txs: string[]): Promise<string> {
        return this.bitcoinCore.callMethod('combinerawtransaction', [txs]);
    }

    // converttopsbt
    public async convertToPsbt(
        hexstring: string,
        permitsigData: boolean = false,
        isWitness?: boolean
    ): Promise<any> {
        return this.bitcoinCore.callMethod('converttopsbt', [
            hexstring,
            permitsigData,
            isWitness,
        ]);
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
    public async decodeRawTransaction(
        hexString: string,
        iswitness?: boolean
    ): Promise<any> {
        return this.bitcoinCore.callMethod('decoderawtransaction', [
            hexString,
            iswitness,
        ]);
    }

    // decodescript
    public async decodeScript(hexString: string): Promise<any> {
        return this.bitcoinCore.callMethod('decodescript', [hexString]);
    }

    // finalizepsbt
    public async finalizePsbt(
        psbt: string,
        extract: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('finalizepsbt', [psbt, extract]);
    }

    // fundrawtransaction
    public async fundRawTransaction(
        hexString: string,
        options: any = {},
        isWitness?: boolean
    ): Promise<any> {
        return this.bitcoinCore.callMethod('fundrawtransaction', [
            hexString,
            options,
            isWitness,
        ]);
    }

    // getrawtransaction
    public async getRawTransaction(
        txid: string,
        verbose: boolean = false,
        blockHash?: string
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getrawtransaction', [
            txid,
            verbose,
            blockHash,
        ]);
    }

    // joinpsbts
    public async joinPsbts(txs: string[]): Promise<string> {
        return this.bitcoinCore.callMethod('joinpsbts', [txs]);
    }

    // sendrawtransaction
    public async sendRawTransaction(
        hexString: string,
        maxFeerate: number | string = 0.1
    ): Promise<string> {
        return this.bitcoinCore.callMethod('sendrawtransaction', [
            hexString,
            maxFeerate,
        ]);
    }

    // signrawtransactionwithkey
    public async signRawTransactionWithKey(
        hexString: string,
        privKeys: string[],
        prevTxs: any[] = [],
        hashType: string = 'ALL'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('signrawtransactionwithkey', [
            hexString,
            privKeys,
            prevTxs,
            hashType,
        ]);
    }

    // testmempoolaccept
    public async testMempoolAccept(
        rawTxs: string[],
        maxFeerate: number | string = 0.1
    ): Promise<any> {
        return this.bitcoinCore.callMethod('testmempoolaccept', [
            rawTxs,
            maxFeerate,
        ]);
    }

    // utxoupdatepsbt
    public async utxoUpdatePsbt(
        psbt: string,
        descriptors?: any[]
    ): Promise<string> {
        return this.bitcoinCore.callMethod('utxoupdatepsbt', [
            psbt,
            descriptors,
        ]);
    }
}
