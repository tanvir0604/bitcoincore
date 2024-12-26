import { BitcoinCore } from './BitcoinCore';

export class WalletRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    public async abandonTransaction(txid: string): Promise<void> {
        return this.bitcoinCore.callMethod('abandontransaction', [txid]);
    }

    public async abortRescan(): Promise<void> {
        return this.bitcoinCore.callMethod('abortrescan');
    }

    public async addMultiSigAddress(
        nrequired: number,
        keys: string[],
        label: string = '',
        addressType?: 'legacy' | 'p2sh-segwit' | 'bech32'
    ): Promise<string> {
        return this.bitcoinCore.callMethod('addmultisigaddress', [
            nrequired,
            keys,
            label,
            addressType,
        ]);
    }

    public async backupWallet(destination: string): Promise<void> {
        return this.bitcoinCore.callMethod('backupwallet', [destination]);
    }

    public async bumpFee(txid: string, options?: {}): Promise<any> {
        return this.bitcoinCore.callMethod('bumpfee', [txid, options]);
    }

    public async createWallet(
        walletName: string,
        disablePrivateKeys: boolean = false,
        blank: boolean = false,
        passphrase: string = '',
        avoidReuse: boolean = false,
        descriptors: boolean = false,
        loadOnStartup?: boolean
    ): Promise<any> {
        return this.bitcoinCore.callMethod('createwallet', [
            walletName,
            disablePrivateKeys,
            blank,
            passphrase,
            avoidReuse,
            descriptors,
            loadOnStartup,
        ]);
    }

    public async dumpPrivKey(address: string): Promise<string> {
        return this.bitcoinCore.callMethod('dumpprivkey', [address]);
    }

    public async dumpWallet(filename: string): Promise<void> {
        return this.bitcoinCore.callMethod('dumpwallet', [filename]);
    }

    public async encryptWallet(passphrase: string): Promise<void> {
        return this.bitcoinCore.callMethod('encryptwallet', [passphrase]);
    }

    public async getAddressesByLabel(label: string): Promise<string[]> {
        return this.bitcoinCore.callMethod('getaddressesbylabel', [label]);
    }

    public async getAddressInfo(address: string): Promise<any> {
        return this.bitcoinCore.callMethod('getaddressinfo', [address]);
    }

    public async getBalance(
        dummy: string = '',
        minConf: number = 1,
        includeWatchOnly?: boolean,
        avoidReuse: boolean = true
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getbalance', [
            dummy,
            minConf,
            includeWatchOnly,
            avoidReuse,
        ]);
    }

    public async getBalances(): Promise<any> {
        return this.bitcoinCore.callMethod('getbalances');
    }

    public async getNewAddress(
        label: string = '',
        addressType?: 'legacy' | 'p2sh-segwit' | 'bech32'
    ): Promise<string> {
        return this.bitcoinCore.callMethod('getnewaddress', [
            label,
            addressType,
        ]);
    }

    public async getRawChangeAddress(
        addressType?: 'legacy' | 'p2sh-segwit' | 'bech32'
    ): Promise<string> {
        return this.bitcoinCore.callMethod('getrawchangeaddress', [
            addressType,
        ]);
    }

    public async getReceivedByAddress(
        address: string,
        minConf: number = 1
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getreceivedbyaddress', [
            address,
            minConf,
        ]);
    }

    public async getReceivedByLabel(
        label: string,
        minConf: number = 1
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getreceivedbylabel', [
            label,
            minConf,
        ]);
    }

    public async getTransaction(
        txid: string,
        includeWatchOnly?: boolean,
        verbose: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('gettransaction', [
            txid,
            includeWatchOnly,
            verbose,
        ]);
    }

    public async getUnconfirmedBalance(): Promise<number> {
        return this.bitcoinCore.callMethod('getunconfirmedbalance');
    }

    public async getWalletInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getwalletinfo');
    }

    public async importAddress(
        address: string,
        label: string = '',
        rescan: boolean = true,
        p2sh?: boolean
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importaddress', [
            address,
            label,
            rescan,
            p2sh,
        ]);
    }

    public async importDescriptors(requests: any[]): Promise<void> {
        return this.bitcoinCore.callMethod('importdescriptors', [requests]);
    }

    public async importMulti(
        requests: any[],
        options: any = {}
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importmulti', [requests, options]);
    }

    public async importPrivKey(
        privkey: string,
        label: string = '',
        rescan: boolean = true
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importprivkey', [
            privkey,
            label,
            rescan,
        ]);
    }

    public async importPrunedFunds(
        rawTransaction: string,
        txOutProof: string
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importprunedfunds', [
            rawTransaction,
            txOutProof,
        ]);
    }

    public async importPubKey(
        pubkey: string,
        label: string = '',
        rescan: boolean = true
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importpubkey', [
            pubkey,
            label,
            rescan,
        ]);
    }

    public async importWallet(filename: string): Promise<void> {
        return this.bitcoinCore.callMethod('importwallet', [filename]);
    }

    public async keyPoolRefill(newSize: number = 100): Promise<void> {
        return this.bitcoinCore.callMethod('keypoolrefill', [newSize]);
    }

    public async listAddressGroupings(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listaddressgroupings');
    }

    public async listLabels(purpose?: 'send' | 'receive'): Promise<string[]> {
        return this.bitcoinCore.callMethod('listlabels', [purpose]);
    }

    public async listLockUnspent(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listlockunspent');
    }

    public async listReceivedByAddress(
        minConf: number = 1,
        includeEmpty: boolean = false,
        includeWatchOnly: boolean = false,
        addressFilter?: string
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listreceivedbyaddress', [
            minConf,
            includeEmpty,
            includeWatchOnly,
            addressFilter,
        ]);
    }

    public async listReceivedByLabel(
        minConf: number = 1,
        includeEmpty: boolean = false,
        includeWatchOnly: boolean = false
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listreceivedbylabel', [
            minConf,
            includeEmpty,
            includeWatchOnly,
        ]);
    }

    public async listSinceBlock(
        blockHash: string = '',
        targetConfirmations: number = 1,
        includeWatchOnly: boolean = false,
        includeRemoved: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('listsinceblock', [
            blockHash,
            targetConfirmations,
            includeWatchOnly,
            includeRemoved,
        ]);
    }

    public async listTransactions(
        label: string = '*',
        count: number = 10,
        skip: number = 0,
        includeWatchOnly: boolean = false
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listtransactions', [
            label,
            count,
            skip,
            includeWatchOnly,
        ]);
    }

    public async listUnspent(
        minConf: number = 1,
        maxConf: number = 9999999,
        addresses?: string[],
        includeUnsafe: boolean = true,
        queryOptions: any = {}
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listunspent', [
            minConf,
            maxConf,
            addresses,
            includeUnsafe,
            queryOptions,
        ]);
    }

    public async listWalletDir(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listwalletdir');
    }

    public async listWallets(): Promise<string[]> {
        return this.bitcoinCore.callMethod('listwallets');
    }

    public async loadWallet(
        filename: string,
        loadOnStartup?: boolean
    ): Promise<void> {
        return this.bitcoinCore.callMethod('loadwallet', [
            filename,
            loadOnStartup,
        ]);
    }

    public async lockUnspent(
        unlock: boolean,
        transactions: any[]
    ): Promise<void> {
        return this.bitcoinCore.callMethod('lockunspent', [
            unlock,
            transactions,
        ]);
    }

    public async psbtBumpFee(txid: string, options: {}): Promise<any> {
        return this.bitcoinCore.callMethod('psbtbumpfee', [txid, options]);
    }

    public async removePrunedFunds(txid: string): Promise<void> {
        return this.bitcoinCore.callMethod('removeprunedfunds', [txid]);
    }

    public async rescanBlockchain(
        startHeight: number = 0,
        stopHeight?: number
    ): Promise<void> {
        return this.bitcoinCore.callMethod('rescanblockchain', [
            startHeight,
            stopHeight,
        ]);
    }

    public async send(
        outputs: any[],
        confTarget?: number,
        estimateMode: 'unset' | 'economical' | 'conservative' = 'unset',
        feeRate?: number | string,
        options: any = {}
    ): Promise<string> {
        return this.bitcoinCore.callMethod('send', [
            outputs,
            confTarget,
            estimateMode,
            feeRate,
            options,
        ]);
    }

    public async sendMany(
        dummy: string = '',
        amounts: {},
        minConf?: number,
        comment: string = '',
        subtractFeeFrom: any[] = [],
        replaceable?: boolean,
        confTarget?: number,
        estimateMode?: 'unset' | 'economical' | 'conservative',
        feeRate?: number | string
    ): Promise<string> {
        return this.bitcoinCore.callMethod('sendmany', [
            dummy,
            amounts,
            minConf,
            comment,
            subtractFeeFrom,
            replaceable,
            confTarget,
            estimateMode,
            feeRate,
        ]);
    }

    public async sendToAddress(
        address: string,
        amount: number | string,
        comment: string = '',
        commentTo: string = '',
        subtractFeeFromAmount: boolean = false,
        replaceable: boolean = false,
        confTarget?: number,
        estimateMode?: 'unset' | 'economical' | 'conservative',
        avoidReuse: boolean = true
    ): Promise<string> {
        return this.bitcoinCore.callMethod('sendtoaddress', [
            address,
            amount,
            comment,
            commentTo,
            subtractFeeFromAmount,
            replaceable,
            confTarget,
            estimateMode,
            avoidReuse,
        ]);
    }

    public async setHdSeed(
        newKeyPool: boolean = true,
        seed?: string
    ): Promise<void> {
        return this.bitcoinCore.callMethod('sethdseed', [newKeyPool, seed]);
    }

    public async setLabel(address: string, label: string): Promise<void> {
        return this.bitcoinCore.callMethod('setlabel', [address, label]);
    }

    public async setTxFee(amount: number | string): Promise<void> {
        return this.bitcoinCore.callMethod('settxfee', [amount]);
    }

    public async setWalletFlag(
        flag: string,
        value: boolean = true
    ): Promise<void> {
        return this.bitcoinCore.callMethod('setwalletflag', [flag, value]);
    }

    public async signMessage(
        address: string,
        message: string
    ): Promise<string> {
        return this.bitcoinCore.callMethod('signmessage', [address, message]);
    }

    public async signRawTransactionWithWallet(
        hexString: string,
        prevTxs?: any[],
        sigHashType:
            | 'All'
            | 'NONE'
            | 'SINGLE'
            | 'ALL|ANYONECANPAY'
            | 'NONE|ANYONECANPAY'
            | 'SINGLE|ANYONECANPAY' = 'All'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('signrawtransactionwithwallet', [
            hexString,
            prevTxs,
            sigHashType,
        ]);
    }

    public async unloadWallet(
        walletName?: string,
        loadOnStartup?: boolean
    ): Promise<void> {
        return this.bitcoinCore.callMethod('unloadwallet', [
            walletName,
            loadOnStartup,
        ]);
    }

    public async upgradeWallet(version: number = 169900): Promise<void> {
        return this.bitcoinCore.callMethod('upgradewallet', [version]);
    }

    public async walletCreateFundedPsbt(
        inputs: any[],
        outputs: any[],
        locktime: number = 0,
        options: any = {},
        bip32Derivs: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('walletcreatefundedpsbt', [
            inputs,
            outputs,
            locktime,
            options,
            bip32Derivs,
        ]);
    }

    public async walletLock(): Promise<void> {
        return this.bitcoinCore.callMethod('walletlock');
    }

    public async walletPassphrase(
        passphrase: string,
        timeout: number
    ): Promise<void> {
        return this.bitcoinCore.callMethod('walletpassphrase', [
            passphrase,
            timeout,
        ]);
    }

    public async walletPassphraseChange(
        oldPassphrase: string,
        newPassphrase: string
    ): Promise<void> {
        return this.bitcoinCore.callMethod('walletpassphrasechange', [
            oldPassphrase,
            newPassphrase,
        ]);
    }

    public async walletProcessPsbt(
        psbt: string,
        sign: boolean = true,
        sigHashType:
            | 'All'
            | 'NONE'
            | 'SINGLE'
            | 'ALL|ANYONECANPAY'
            | 'NONE|ANYONECANPAY'
            | 'SINGLE|ANYONECANPAY' = 'All',
        bip32Derivs: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('walletprocesspsbt', [
            psbt,
            sign,
            sigHashType,
            bip32Derivs,
        ]);
    }
}
