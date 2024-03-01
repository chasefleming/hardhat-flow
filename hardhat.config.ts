import 'dotenv/config';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY || ''],
      gas: 500000,
    },
    previewnet: {
      url: "https://previewnet.evm.nodes.onflow.org",
      accounts: [process.env.PRIVATE_KEY || ''],
      gas: 500000,
    }
  }
};

export default config;