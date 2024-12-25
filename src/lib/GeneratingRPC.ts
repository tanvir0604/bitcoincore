import { BitcoinCore } from './BitcoinCore';

export class GeneratingRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // generateblock
    public async generateBlock(
        nblocks: number,
        maxtries: number = 100
    ): Promise<string[]> {
        return this.bitcoinCore.callMethod('generateblock', [
            nblocks,
            maxtries,
        ]);
    }

    // generatetoaddress
    public async generateToAddress(
        nblocks: number,
        address: string,
        maxtries: number = 100
    ): Promise<string[]> {
        return this.bitcoinCore.callMethod('generatetoaddress', [
            nblocks,
            address,
            maxtries,
        ]);
    }

    // generatetodescriptor
    public async generateToDescriptor(
        nblocks: number,
        descriptor: string,
        maxtries: number = 100
    ): Promise<string[]> {
        return this.bitcoinCore.callMethod('generatetodescriptor', [
            nblocks,
            descriptor,
            maxtries,
        ]);
    }
}
