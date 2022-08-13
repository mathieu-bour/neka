import { FC } from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import preview from '../../public/preview.gif';
import useMint from '../hooks/useMint';
import Frame from './Frame';

interface ConnectModal extends Omit<ModalProps, 'children'> {}

const ConnectModal: FC<ConnectModal> = ({ isOpen, onClose }) => {
  const { mint, loading } = useMint();

  const handleMint = () => {
    mint().then(onClose);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="gray.700">
        <ModalHeader>Mint the Next Neka!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignItems="center" justifyContent="center">
            <Flex direction="column" justifyContent="space-around">
              <Frame src={preview.src} />
              <Button mt={4} isLoading={loading} loadingText="Minting" onClick={handleMint}>
                Mint (free, only pay gas!)
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConnectModal;
