import Image from 'next/image';
import { FC } from 'react';
import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from '@chakra-ui/react';
import metamaskLogo from '../../public/metamask.svg';
import walletConnectLogo from '../../public/wallet-connect.svg';
import { metaMask } from '../connectors/metaMask';
import { walletConnect } from '../connectors/walletConnect';
import { chain } from '../constants';

interface ConnectModal extends Omit<ModalProps, 'children'> {}

const ConnectModal: FC<ConnectModal> = ({ isOpen, onClose }) => {
  const handleMetaMask = async () => {
    await metaMask.activate(chain);
    onClose();
  };

  const handleWalletConnect = async () => {
    try {
      await walletConnect.activate(chain.chainId);
    } catch (_) {
      return;
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="gray.700">
        <ModalHeader>Connect your wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="1fr 1fr" gap={4}>
            <Button
              height="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              py={2}
              onClick={handleMetaMask}
            >
              <Image src={metamaskLogo} width="50px" height="50px" alt="MetaMask logo" />
              <Text>MetaMask</Text>
            </Button>

            <Button
              height="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              py={2}
              onClick={handleWalletConnect}
            >
              <Image src={walletConnectLogo} width="50px" height="50px" alt="WalletConnect logo" />
              <Text>WalletConnect</Text>
            </Button>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectModal;
