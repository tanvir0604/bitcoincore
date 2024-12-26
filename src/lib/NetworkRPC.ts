import { BitcoinCore } from './BitcoinCore';

export class NetworkRPC {
    constructor(private readonly bitcoinCore: BitcoinCore) {}

    // addnode
    public async addNode(node: string, command: string): Promise<any> {
        return this.bitcoinCore.callMethod('addnode', [node, command]);
    }

    // clearbanned
    public async clearBanned(): Promise<any> {
        return this.bitcoinCore.callMethod('clearbanned');
    }

    // disconnectnode
    public async disconnectNode(
        address?: string,
        nodeId?: number
    ): Promise<any> {
        return this.bitcoinCore.callMethod('disconnectnode', [address, nodeId]);
    }

    // getaddednodeinfo
    public async getAddedNodeInfo(node?: string): Promise<any> {
        return this.bitcoinCore.callMethod('getaddednodeinfo', [node]);
    }

    // getconnectioncount
    public async getConnectionCount(): Promise<number> {
        return this.bitcoinCore.callMethod('getconnectioncount');
    }

    // getnettotals
    public async getNetTotals(): Promise<any> {
        return this.bitcoinCore.callMethod('getnettotals');
    }

    // getnetworkinfo
    public async getNetworkInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getnetworkinfo');
    }

    // getnodeaddresses
    public async getNodeAddresses(count: number = 1): Promise<any> {
        return this.bitcoinCore.callMethod('getnodeaddresses', [count]);
    }

    // getpeerinfo
    public async getPeerInfo(): Promise<any> {
        return this.bitcoinCore.callMethod('getpeerinfo');
    }

    // listbanned
    public async listBanned(): Promise<any> {
        return this.bitcoinCore.callMethod('listbanned');
    }

    // ping
    public async ping(): Promise<any> {
        return this.bitcoinCore.callMethod('ping');
    }

    // setban
    public async setBan(
        subnet: string,
        command: string,
        bantime: number = 0,
        absolute: boolean = false
    ): Promise<any> {
        return this.bitcoinCore.callMethod('setban', [
            subnet,
            command,
            bantime,
            absolute,
        ]);
    }

    // setnetworkactive
    public async setNetworkActive(state: boolean): Promise<any> {
        return this.bitcoinCore.callMethod('setnetworkactive', [state]);
    }
}
