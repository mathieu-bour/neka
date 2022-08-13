import { AddEthereumChainParameter } from '@web3-react/types';

export const chain: AddEthereumChainParameter = {
  chainId: 43113,
  chainName: 'Avalanche Testnet C-Chain',
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.snowtrace.io'],
};
