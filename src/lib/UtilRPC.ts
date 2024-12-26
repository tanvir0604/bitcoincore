import { BitcoinCore } from './BitcoinCore';

export class UtilRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // createmultisig
    public async createMultisig(
        nrequired: number,
        keys: string[],
        addressType: string = 'legacy'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('createmultisig', [
            nrequired,
            keys,
            addressType,
        ]);
    }

    // deriveaddresses
    public async deriveAddresses(
        descriptor: string,
        range?: number | []
    ): Promise<string[]> {
        return this.bitcoinCore.callMethod('deriveaddresses', [
            descriptor,
            range,
        ]);
    }

    // estimatesmartfee
    public async estimateSmartFee(
        confTarget: number,
        estimateMode: 'UNSET' | 'ECONOMICAL' | 'CONSERVATIVE' = 'CONSERVATIVE'
    ): Promise<any> {
        return this.bitcoinCore.callMethod('estimatesmartfee', [
            confTarget,
            estimateMode,
        ]);
    }

    // getdescriptorinfo
    public async getDescriptorInfo(descriptor: string): Promise<any> {
        return this.bitcoinCore.callMethod('getdescriptorinfo', [descriptor]);
    }

    // getindexinfo
    public async getIndexInfo(indexName?: string): Promise<any> {
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
