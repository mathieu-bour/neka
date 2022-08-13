import { FC } from 'react';
import { Box, SkeletonText, Text } from '@chakra-ui/react';
import useSupply from '../hooks/useSupply';

const MintProgress: FC = () => {
  const { current, max, isLoading } = useSupply();
  const progress = current && max ? (current / max) * 100 : 0;

  return (
    <Box bgColor="gray.400" width="100%" position="relative" height={8}>
      <Box bgColor="green.600" width={`${progress ?? 0}%`} height="100%" />

      {!isLoading && (
        <Text align="center" fontSize="sm" position="absolute" width="100%" lineHeight={8} inset="0 0 0 0">
          Mint progress: {current}/{max}
        </Text>
      )}
    </Box>
  );
};

export default MintProgress;
