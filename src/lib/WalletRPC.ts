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
        label: string = ''
    ): Promise<string> {
        return this.bitcoinCore.callMethod('addmultisigaddress', [
            nrequired,
            keys,
            label,
        ]);
    }

    public async backupWallet(dest: string): Promise<void> {
        return this.bitcoinCore.callMethod('backupwallet', [dest]);
    }

    public async bumpFee(txid: string): Promise<any> {
        return this.bitcoinCore.callMethod('bumpfee', [txid]);
    }

    public async createWallet(
        walletName: string,
        disablePrivateKeys: boolean = false,
        passphrase: string = '',
        avoidReuse: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('createwallet', [
            walletName,
            disablePrivateKeys,
            passphrase,
            avoidReuse,
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
        minConf: number = 1,
        includeWatchOnly: boolean = false
    ): Promise<number> {
        return this.bitcoinCore.callMethod('getbalance', [
            minConf,
            includeWatchOnly,
        ]);
    }

    public async getBalances(): Promise<any> {
        return this.bitcoinCore.callMethod('getbalances');
    }

    public async getNewAddress(label: string = ''): Promise<string> {
        return this.bitcoinCore.callMethod('getnewaddress', [label]);
    }

    public async getRawChangeAddress(): Promise<string> {
        return this.bitcoinCore.callMethod('getrawchangeaddress');
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

    public async getTransaction(txid: string): Promise<any> {
        return this.bitcoinCore.callMethod('gettransaction', [txid]);
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
        rescan: boolean = true
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importaddress', [
            address,
            label,
            rescan,
        ]);
    }

    public async importDescriptors(
        descriptors: any[],
        options: any = {}
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importdescriptors', [
            descriptors,
            options,
        ]);
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
        txid: string,
        txOutProof: string,
        rawTransaction: string
    ): Promise<void> {
        return this.bitcoinCore.callMethod('importprunedfunds', [
            txid,
            txOutProof,
            rawTransaction,
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

    public async keyPoolRefill(nsize: number = 100): Promise<void> {
        return this.bitcoinCore.callMethod('keypoolrefill', [nsize]);
    }

    public async listAddressGroupings(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listaddressgroupings');
    }

    public async listLabels(): Promise<string[]> {
        return this.bitcoinCore.callMethod('listlabels');
    }

    public async listLockUnspent(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listlockunspent');
    }

    public async listReceivedByAddress(
        minConf: number = 1,
        includeEmpty: boolean = false,
        includeWatchOnly: boolean = false
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listreceivedbyaddress', [
            minConf,
            includeEmpty,
            includeWatchOnly,
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
        targetConfirmations: number = 1
    ): Promise<any> {
        return this.bitcoinCore.callMethod('listsinceblock', [
            blockHash,
            targetConfirmations,
        ]);
    }

    public async listTransactions(
        account: string = '*',
        count: number = 10,
        skip: number = 0,
        includeWatchOnly: boolean = false
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listtransactions', [
            account,
            count,
            skip,
            includeWatchOnly,
        ]);
    }

    public async listUnspent(
        minConf: number = 1,
        maxConf: number = 9999999,
        addresses?: string[]
    ): Promise<any[]> {
        return this.bitcoinCore.callMethod('listunspent', [
            minConf,
            maxConf,
            addresses,
        ]);
    }

    public async listWalletDir(): Promise<any[]> {
        return this.bitcoinCore.callMethod('listwalletdir');
    }

    public async listWallets(): Promise<string[]> {
        return this.bitcoinCore.callMethod('listwallets');
    }

    public async loadWallet(filename: string): Promise<void> {
        return this.bitcoinCore.callMethod('loadwallet', [filename]);
    }

    public async lockUnspent(
        lock: boolean,
        transactions: any[]
    ): Promise<void> {
        return this.bitcoinCore.callMethod('lockunspent', [lock, transactions]);
    }

    public async psbtBumpFee(psbt: string): Promise<any> {
        return this.bitcoinCore.callMethod('psbtbumpfee', [psbt]);
    }

    public async removePrunedFunds(txid: string): Promise<void> {
        return this.bitcoinCore.callMethod('removeprunedfunds', [txid]);
    }

    public async rescanBlockchain(startBlockHash: string = ''): Promise<void> {
        return this.bitcoinCore.callMethod('rescanblockchain', [
            startBlockHash,
        ]);
    }

    public async send(
        amount: number,
        address: string,
        comment: string = '',
        commentTo: string = ''
    ): Promise<string> {
        return this.bitcoinCore.callMethod('send', [
            amount,
            address,
            comment,
            commentTo,
        ]);
    }

    public async sendMany(
        amounts: any,
        comment: string = '',
        commentTo: string = ''
    ): Promise<string> {
        return this.bitcoinCore.callMethod('sendmany', [
            comment,
            amounts,
            commentTo,
        ]);
    }

    public async sendToAddress(
        address: string,
        amount: number,
        comment: string = '',
        commentTo: string = ''
    ): Promise<string> {
        return this.bitcoinCore.callMethod('sendtoaddress', [
            address,
            amount,
            comment,
            commentTo,
        ]);
    }

    public async setHdSeed(newHdSeed: string): Promise<void> {
        return this.bitcoinCore.callMethod('sethdseed', [newHdSeed]);
    }

    public async setLabel(address: string, label: string): Promise<void> {
        return this.bitcoinCore.callMethod('setlabel', [address, label]);
    }

    public async setTxFee(feeRate: number): Promise<void> {
        return this.bitcoinCore.callMethod('settxfee', [feeRate]);
    }

    public async setWalletFlag(flag: string): Promise<void> {
        return this.bitcoinCore.callMethod('setwalletflag', [flag]);
    }

    public async signMessage(
        address: string,
        message: string
    ): Promise<string> {
        return this.bitcoinCore.callMethod('signmessage', [address, message]);
    }

    public async signRawTransactionWithWallet(txData: any): Promise<any> {
        return this.bitcoinCore.callMethod('signrawtransactionwithwallet', [
            txData,
        ]);
    }

    public async unloadWallet(): Promise<void> {
        return this.bitcoinCore.callMethod('unloadwallet');
    }

    public async upgradeWallet(): Promise<void> {
        return this.bitcoinCore.callMethod('upgradewallet');
    }

    public async walletCreateFundedPsbt(
        inputs: any[],
        outputs: any[],
        locktime: number = 0,
        options: any = {}
    ): Promise<any> {
        return this.bitcoinCore.callMethod('walletcreatefundedpsbt', [
            inputs,
            outputs,
            locktime,
            options,
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
        finalize: boolean = true
    ): Promise<any> {
        return this.bitcoinCore.callMethod('walletprocesspsbt', [
            psbt,
            sign,
            finalize,
        ]);
    }
}
