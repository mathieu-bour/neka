import Image from 'next/image';
import { FC } from 'react';
import { Box, Flex, FlexProps, Skeleton } from '@chakra-ui/react';

interface FramePros extends FlexProps {
  src: string | null | undefined;
  size?: number;
}

const Frame: FC<FramePros> = ({ src, size = 300, ...boxProps }) => {
  return (
    <Flex display="inline-flex" p={3} border="solid 1px" borderColor="gray.400" {...boxProps}>
      <Skeleton isLoaded={typeof src === 'string'}>
        <Box bgColor="gray.400" width={size} height={size}>
          {src && <Image src={src} width={size} height={size} />}
        </Box>
      </Skeleton>
    </Flex>
  );
};

export default Frame;
