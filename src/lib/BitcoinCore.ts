import axios from 'axios';
import { BitcoinCoreConfig } from './Interfaces';
import { BlockchainRPC } from './BlockchainRPC';
import { ControlRPC } from './ControlRPC';
import { GeneratingRPC } from './GeneratingRPC';
import { MiningRPC } from './MiningRPC';
import { NetworkRPC } from './NetworkRPC';
import { RawTransactionRPC } from './RawTransactionRPC';
import { UtilRPC } from './UtilRPC';
import { WalletRPC } from './WalletRPC';

export class BitcoinCore {
    private url: string;
    private config: BitcoinCoreConfig;
    public BlockchainRPC: BlockchainRPC;
    public ControlRPC: ControlRPC;
    public GeneratingRPC: GeneratingRPC;
    public MiningRPC: MiningRPC;
    public NetworkRPC: NetworkRPC;
    public RawTransactionRPC: RawTransactionRPC;
    public UtilRPC: UtilRPC;
    public WalletRPC: WalletRPC;

    constructor(config: BitcoinCoreConfig) {
        this.config = config;
        this.BlockchainRPC = new BlockchainRPC(this);
        this.ControlRPC = new ControlRPC(this);
        this.GeneratingRPC = new GeneratingRPC(this);
        this.MiningRPC = new MiningRPC(this);
        this.NetworkRPC = new NetworkRPC(this);
        this.RawTransactionRPC = new RawTransactionRPC(this);
        this.UtilRPC = new UtilRPC(this);
        this.WalletRPC = new WalletRPC(this);
        this.url = `http://${this.config.host}:${this.config.port}`;
    }

    public async callMethod(
        method: string,
        params: any[] = [],
        options?: { wallet: string }
    ): Promise<any> {
        const auth = {
            username: this.config.username,
            password: this.config.password,
        };

        const url = options?.wallet
            ? `${this.url}/wallet/${options.wallet}`
            : this.url;

        // console.log(url);
        try {
            const response = await axios.post(
                url,
                {
                    jsonrpc: '1.0',
                    id: 'curltest',
                    method: method,
                    params: params,
                },
                { auth }
            );
            // console.log('response', response);
            return response.data;
        } catch (error: any) {
            // console.log(error);
            return error.response.data;
        }
    }
}
