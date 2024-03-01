# Hardhat Flow Blockchain Project

This project demonstrates how you can deploy a Solidity project to the Flow blockchain or Sepolia using zero code changes to the code or project beyond pointing to the correct network. This project also shows how tools like OpenZeppelin can be used with Flow in the same way they would any other EVM compatible network.

You'll see in the `[hardhat.config.js`](./hardhat.config.ts) file that we have a Flow `previewnet` network setup, in addition to `sepolia` for Ethereum. This is the testnet work on Flow supporing the EVM.

## Using this Project

To use this project, you'll need to have Node.js and npm installed. First, install the dependencies:

```bash
npm install
```

### Deploying to Flow

Then, you can deploy the `Box` contract to the Flow blockchain:

```bash
npx hardhat run scripts/deploy.ts --network previewnet
```

### Updating/Reading the State

You can then update the state of the `Box` contract:

```bash
NEW_VALUE=1 npx hardhat run scripts/store.ts --network previewnet
```

This script will read the current value of the `Box` contract, add the new value to it, and then read the new value.

## More Information

For more information about the FlowEVM, check out the [Flow documentation](https://developers.flow.com/evm/about).
