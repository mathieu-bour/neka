import { FC } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import MintModal from './MintModal';

const MintButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Mint</Button>
      <MintModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default MintButton;
