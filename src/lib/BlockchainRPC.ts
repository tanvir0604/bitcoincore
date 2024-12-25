import { BitcoinCore } from './BitcoinCore';

export class BlockchainRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // getbestblockhash
    public async getBestBlockhash(): Promise<string> {
        return this.bitcoinCore.callMethod('getbestblockhash');
    }

    // getblock
    public async getBlock(
        blockHash: string,
        verbosity: number = 1
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getblock', [blockHash, verbosity]);
    }

    // getblockchaininfo
    public async getBlockchainInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getblockchaininfo');
    }

    // getblockcount
    public async getBlockCount(): Promise<number> {
        return this.bitcoinCore.callMethod('getblockcount');
    }

    // getblockfilter
    public async getBlockFilter(
        blockHash: string,
        filterType: string
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getblockfilter', [
            blockHash,
            filterType,
        ]);
    }

    // getblockhash
    public async getBlockHash(index: number): Promise<string> {
        return this.bitcoinCore.callMethod('getblockhash', [index]);
    }

    // getblockheader
    public async getBlockHeader(
        blockHash: string,
        verbose: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getblockheader', [
            blockHash,
            verbose,
        ]);
    }

    // getblockstats
    public async getBlockStats(blockHash: string): Promise<any> {
        return this.bitcoinCore.callMethod('getblockstats', [blockHash]);
    }

    // getchaintips
    public async getChainTips(): Promise<any> {
        return this.bitcoinCore.callMethod('getchaintips');
    }

    // getchaintxstats
    public async getChainTxStats(
        blocks: number = 120,
        blockHash?: string
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getchaintxstats', [
            blocks,
            blockHash,
        ]);
    }

    // getdifficulty
    public async getDifficulty(): Promise<number> {
        return this.bitcoinCore.callMethod('getdifficulty');
    }

    // getmempoolancestors
    public async getMempoolAncestors(
        txid: string,
        verbose: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getmempoolancestors', [
            txid,
            verbose,
        ]);
    }

    // getmempooldescendants
    public async getMempoolDescendants(
        txid: string,
        verbose: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getmempooldescendants', [
            txid,
            verbose,
        ]);
    }

    // getmempoolentry
    public async getMempoolEntry(txid: string): Promise<any> {
        return this.bitcoinCore.callMethod('getmempoolentry', [txid]);
    }

    // getmempoolinfo
    public async getMempoolInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getmempoolinfo');
    }

    // getrawmempool
    public async getRawMempool(verbose: boolean = true): Promise<any> {
        return this.bitcoinCore.callMethod('getrawmempool', [verbose]);
    }

    // gettxout
    public async getTxOut(
        txid: string,
        vout: number,
        includeMemPool: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('gettxout', [
            txid,
            vout,
            includeMemPool,
        ]);
    }

    // gettxoutproof
    public async getTxOutProof(
        txids: string[],
        blockHash?: string
    ): Promise<any> {
        return this.bitcoinCore.callMethod('gettxoutproof', [txids, blockHash]);
    }

    // gettxoutsetinfo
    public async getTxOutSetInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('gettxoutsetinfo');
    }

    // preciousblock
    public async preciousBlock(blockHash: string): Promise<any> {
        return this.bitcoinCore.callMethod('preciousblock', [blockHash]);
    }

    // pruneblockchain
    public async pruneBlockChain(height: number): Promise<any> {
        return this.bitcoinCore.callMethod('pruneblockchain', [height]);
    }

    // savemempool
    public async saveMempool(): Promise<any> {
        return this.bitcoinCore.callMethod('savemempool');
    }

    // scantxoutset
    public async scanTxOutSet(scanObjects: any[]): Promise<any> {
        return this.bitcoinCore.callMethod('scantxoutset', [scanObjects]);
    }

    // verifychain
    public async verifyChain(
        checklevel: number = 3,
        nblocks: number = 6
    ): Promise<any> {
        return this.bitcoinCore.callMethod('verifychain', [
            checklevel,
            nblocks,
        ]);
    }

    // verifytxoutproof
    public async verifyTxOutProof(proof: string): Promise<any> {
        return this.bitcoinCore.callMethod('verifytxoutproof', [proof]);
    }
}
