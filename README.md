# bitcoincore-node

A comprehensive Node.js package for interacting with Bitcoin Core via RPC. Easily create, sign, and broadcast Bitcoin transactions, manage wallets, and access blockchain data through a simple and easy-to-use API interface. Perfect for developers building cryptocurrency applications, wallets, or integrating Bitcoin functionality into their services.

## Features

- **Create Bitcoin transactions**: Create, sign, and broadcast transactions directly from your Node.js application.
- **Wallet management**: Manage Bitcoin wallets, import/export private keys, and perform backup and encryption operations.
- **Blockchain data**: Access various blockchain data including block hashes, block headers, and transaction details.
- **Bitcoin Core RPC**: Interact with Bitcoin Core via JSON-RPC, supporting a wide range of commands.

## Installation

To install the package, use npm:

```bash
npm install bitcoincore-node
```

## Usage

To use the package, require the module and create a new instance of the `BitcoinCore` class.

Follow official [Bitcoin Core documentation](https://developer.bitcoin.org/reference/rpc/index.html) for more details on available commands.

### Import Library

```javascript
const BitcoinCore = require('bitcoincore-node');
```

#### ES6

```javascript
import { BitcoinCore } from 'bitcoincore-node';
```

### Example

```javascript
// Create a new instance of BitcoinCore
const client = new BitcoinCore({
    network: 'test'
    host: '127.0.0.1',
    port: 18332,
    username: 'rpcusername',
    password: 'rpcpassword',
});
```

### All RPC methods are available as promises in camelCase

#### BlockchainRPC

```javascript
const blockHash = await client.BlockchainRPC.getBestBlockhash();
```

#### ControlRPC

```javascript
const info = await client.ControlRPC.getMemoryInfo();
```

#### GeneratingRPC

```javascript
const info = await client.GeneratingRPC.generateBlock(...);
```

#### MiningRPC

```javascript
const info = await client.MiningRPC.getBlockTemplate();
```

#### NetworkRPC

```javascript
const info = await client.NetworkRPC.getNetworkInfo();
```

#### RawTransactionRPC

```javascript
const info = await client.RawTransactionRPC.getRawTransaction(...);
```

#### UtilRPC

```javascript
const info = await client.UtilRPC.getIndexInfo(...);
```

#### WalletRPC

```javascript
const info = await client.WalletRPC.getBalance(...);
```

## Sample

### Run bitcoin core

Download and install bitcoincore in your machine

Follow official [Bitcoin Core documentation](https://bitcoin.org/en/download) for more details instruction.

### Create wallet

```javascript
return await client.WalletRPC.createWallet('your_wallet_name');
```

### Get wallet information

```javascript
return await client.WalletRPC.getWalletInfo({
    wallet: 'your_wallet_name',
});
```

### Wallet balance

```javascript
return await client.WalletRPC.getBalance({
    wallet: 'your_wallet_name',
});
```

### Create address

```javascript
return await client.WalletRPC.getNewAddress({
    wallet: 'your_wallet_name',
});
```

#### Respose

```json
tb1q30lhx0e00xql5gmwn59yvu3umf7s03p8tp4gdh
```

### Get address info

```javascript
return await client.WalletRPC.getAddressInfo(
    'tb1q30lhx0e00xql5gmwn59yvu3umf7s03p8tp4gdh'
);
```

### Take payment

Send test bitcoin to the address. You can send test bitcoin using various testnet faucet for free. Then you can check your wallet balance to confirm that the payment has been received.

### Monitor payment

```javascript
return await client.WalletRPC.getReceivedByAddress(
    {
        wallet: 'your_wallet_name',
    },
    'tb1q30lhx0e00xql5gmwn59yvu3umf7s03p8tp4gdh'
);
```

## License

This package is released under the [MIT License](LICENSE).

## Author

[**Md Shafkat Hussain Tanvir**](https://github.com/tanvir0604)
