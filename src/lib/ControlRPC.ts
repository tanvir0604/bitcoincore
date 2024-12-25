import { BitcoinCore } from './BitcoinCore';

export class ControlRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // getmemoryinfo
    public async getMemoryInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getmemoryinfo');
    }

    // getrpcinfo
    public async getRpcInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getrpcinfo');
    }

    // help
    public async help(command?: string): Promise<any> {
        return this.bitcoinCore.callMethod('help', [command]);
    }

    // logging
    public async logging(): Promise<any> {
        return this.bitcoinCore.callMethod('logging');
    }

    // stop
    public async stop(): Promise<any> {
        return this.bitcoinCore.callMethod('stop');
    }

    // uptime
    public async uptime(): Promise<number> {
        return this.bitcoinCore.callMethod('uptime');
    }
}
