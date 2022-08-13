import { config as loadConfig } from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import { join } from 'path';
import '@nomicfoundation/hardhat-toolbox';

loadConfig({ path: join(process.cwd(), '.env.local') });

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
      },
      gas: 8000000,
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: process.env.FUJI_PRIVATE_KEY ? [process.env.FUJI_PRIVATE_KEY] : [],
    },
    // mainnet: {
    //   url: 'https://api.avax.network/ext/bc/C/rpc',
    //   chainId: 43114,
    //   accounts: process.env.MAINNET_PRIVATE_KEY ? [process.env.MAINNET_PRIVATE_KEY] : [],
    // },
  },
  typechain: {
    outDir: 'typings',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: {
      avalanche: process.env.SNOWTRACE_API_KEY as string,
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY as string,
    },
  },
};

export default config;
