# @shafkat/bitcoincore

A comprehensive Node.js package for interacting with Bitcoin Core via RPC. Easily create, sign, and broadcast Bitcoin transactions, manage wallets, and access blockchain data through a simple and easy-to-use API interface. Perfect for developers building cryptocurrency applications, wallets, or integrating Bitcoin functionality into their services.

## Features

- **Create Bitcoin transactions**: Create, sign, and broadcast transactions directly from your Node.js application.
- **Wallet management**: Manage Bitcoin wallets, import/export private keys, and perform backup and encryption operations.
- **Blockchain data**: Access various blockchain data including block hashes, block headers, and transaction details.
- **Bitcoin Core RPC**: Interact with Bitcoin Core via JSON-RPC, supporting a wide range of commands.

## Installation

To install the package, use npm:

```bash
npm install @tanvir0604/bitcoincore
```

## Usage

To use the package, require the module and create a new instance of the `BitcoinCore` class.

Follow official [Bitcoin Core documentation](https://developer.bitcoin.org/reference/rpc/index.html) for more details on available commands.

### Import Library

```javascript
const BitcoinCore = require('@tanvir0604/bitcoincore');
```

#### ES6

```javascript
import { BitcoinCore } from '@tanvir0604/bitcoincore';
```

### Example

```javascript
// Create a new instance of BitcoinCore
const client = new BitcoinCore({
    host: 'localhost',
    port: 8332,
    username: 'username',
    password: 'password',
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

## License

This package is released under the [MIT License](LICENSE).

## Author

[**Md Shafkat Hussain Tanvir**](https://github.com/tanvir0604)
