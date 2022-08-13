import NextLink from 'next/link';
import { BsGearWideConnected } from 'react-icons/bs';
import { FC, ReactNode } from 'react';
import { Box, Button, Container, Flex, Link, Progress, Text } from '@chakra-ui/react';
import useShortAddress from '../hooks/useShortAddress';
import useSupply from '../hooks/useSupply';
import ConnectButton from './ConnectButton';
import MintButton from './MintButton';
import MintProgress from './MintProgress';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const shortAddress = useShortAddress();

  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" bgColor="green.800" py={4}>
        <Container as={Flex} gap={8} alignItems="center">
          <Flex alignItems="center" gap={8}>
            <Text fontSize="3xl">
              <BsGearWideConnected />
            </Text>

            <NextLink href="/nekadex/1" passHref>
              <Link>Nekadex</Link>
            </NextLink>

            <NextLink href={process.env.NEXT_PUBLIC_OPENSEA_URL!} passHref>
              <Link target="_blank">OpenSea</Link>
            </NextLink>

            <NextLink href="https://twitter.com/Mathieu_Bour_" passHref>
              <Link target="_blank">Twitter</Link>
            </NextLink>

            <MintButton />
          </Flex>

          <Flex grow={1}>
            <MintProgress />
          </Flex>

          <Flex as="nav" gap={2} alignItems="center">
            {shortAddress && <Text>{shortAddress}</Text>}
            <ConnectButton />
          </Flex>
        </Container>
      </Box>

      <Container as="main" flexGrow={1}>
        {children}
      </Container>

      <Box as="footer" bgColor="black" py={2}>
        <Container centerContent>
          <Text fontSize="sm">
            This app is a 1-day project (12-13 August 2022) by{' '}
            <Link href="https://github.com/mathieu-bour">Mathieu Bour</Link>, created on the{' '}
            <Link href="https://testnet.snowtrace.io/">Avalanche Fuji Testnet</Link>
          </Text>
          <Text fontSize="sm">
            All NFT credits go to <Link href="https://robohash.org/">robohash.org</Link>
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Layout;
