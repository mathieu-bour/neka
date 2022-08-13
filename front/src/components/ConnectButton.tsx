import { BiWallet } from 'react-icons/bi';
import { Button, useDisclosure } from '@chakra-ui/react';
import ConnectModal from './ConnectModal';

const ConnectButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <BiWallet />
      </Button>

      <ConnectModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ConnectButton;
