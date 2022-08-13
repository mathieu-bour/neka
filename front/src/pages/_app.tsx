import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import Layout from '../components/Layout';
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask';
import { walletConnect, hooks as walletConnectHooks } from '../connectors/walletConnect';
import theme from '../style/theme';

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

const queryClient = new QueryClient();

const Runtime = () => {
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  return null;
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Neka NFT - bip boop we are a test project!</title>
      <meta
        name="description"
        content="This app is a 1-day project (12-13 August 2022) by Mathieu Bour, created on the Avalanche Fuji Testnet"
      />
    </Head>

    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider connectors={connectors}>
        <Runtime />
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Web3ReactProvider>
    </QueryClientProvider>
  </>
);

export default MyApp;
