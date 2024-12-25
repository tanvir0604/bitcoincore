import { BitcoinCore } from './BitcoinCore';

export class UtilRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // createmultisig
    public async createMultisig(
        nrequired: number,
        keys: string[]
    ): Promise<any> {
        return this.bitcoinCore.callMethod('createmultisig', [nrequired, keys]);
    }

    // deriveaddresses
    public async deriveAddresses(
        descriptor: string,
        index: number
    ): Promise<string[]> {
        return this.bitcoinCore.callMethod('deriveaddresses', [
            descriptor,
            index,
        ]);
    }

    // estimatesmartfee
    public async estimateSmartFee(confTarget: number): Promise<any> {
        return this.bitcoinCore.callMethod('estimatesmartfee', [confTarget]);
    }

    // getdescriptorinfo
    public async getDescriptorInfo(descriptor: string): Promise<any> {
        return this.bitcoinCore.callMethod('getdescriptorinfo', [descriptor]);
    }

    // getindexinfo
    public async getIndexInfo(indexName: string): Promise<any> {
        return this.bitcoinCore.callMethod('getindexinfo', [indexName]);
    }

    // signmessagewithprivkey
    public async signMessageWithPrivKey(
        privKey: string,
        message: string
    ): Promise<string> {
        return this.bitcoinCore.callMethod('signmessagewithprivkey', [
            privKey,
            message,
        ]);
    }

    // validateaddress
    public async validateAddress(address: string): Promise<any> {
        return this.bitcoinCore.callMethod('validateaddress', [address]);
    }

    // verifymessage
    public async verifyMessage(
        address: string,
        signature: string,
        message: string
    ): Promise<boolean> {
        return this.bitcoinCore.callMethod('verifymessage', [
            address,
            signature,
            message,
        ]);
    }
}
