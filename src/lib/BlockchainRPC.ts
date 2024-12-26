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
        filterType: string = 'basic'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getblockfilter', [
            blockHash,
            filterType,
        ]);
    }

    // getblockhash
    public async getBlockHash(height: number): Promise<string> {
        return this.bitcoinCore.callMethod('getblockhash', [height]);
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
    public async getBlockStats(
        hashOrHeight: string | number,
        stats: [] = []
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getblockstats', [
            hashOrHeight,
            stats,
        ]);
    }

    // getchaintips
    public async getChainTips(): Promise<any> {
        return this.bitcoinCore.callMethod('getchaintips');
    }

    // getchaintxstats
    public async getChainTxStats(
        nblocks?: number,
        blockHash?: string
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getchaintxstats', [
            nblocks,
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
        verbose: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getmempoolancestors', [
            txid,
            verbose,
        ]);
    }

    // getmempooldescendants
    public async getMempoolDescendants(
        txid: string,
        verbose: boolean = false
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
    public async getRawMempool(
        verbose: boolean = false,
        mempoolSequence: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('getrawmempool', [
            verbose,
            mempoolSequence,
        ]);
    }

    // gettxout
    public async getTxOut(
        txid: string,
        n: number,
        includeMemPool: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('gettxout', [
            txid,
            n,
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
    public async getTxOutSetInfo(
        hashType: string = 'hash_serialized_2'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('gettxoutsetinfo', [hashType]);
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
    public async scanTxOutSet(
        action: 'start' | 'abort' | 'status',
        scanObjects: any[]
    ): Promise<any> {
        return this.bitcoinCore.callMethod('scantxoutset', [
            action,
            scanObjects,
        ]);
    }

    // verifychain
    public async verifyChain(
        checklevel: 0 | 1 | 2 | 3 | 4 = 3,
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
