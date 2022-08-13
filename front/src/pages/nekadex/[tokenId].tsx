import { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Link, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import NFTFrame from '../../components/NFTFrame';
import useNFT from '../../hooks/useNFT';

function extractTokenId(query: string | string[] | null | undefined): number | null {
  const tokenStr = (Array.isArray(query) ? query[0] : query) ?? undefined;

  if (typeof tokenStr !== 'string') {
    return null;
  }

  const parsed = parseInt(tokenStr, 10);

  return isNaN(parsed) ? null : parsed;
}

const TokenPage: NextPage = () => {
  const router = useRouter();
  const tokenId = extractTokenId(router.query.tokenId);
  const { metadata, owner } = useNFT(tokenId);

  return (
    <>
      <Text as="h1" fontSize="5xl">
        Nekadex #{tokenId}
      </Text>

      <Flex gap={8}>
        <NFTFrame tokenId={tokenId} />

        <Box>
          <SkeletonText as="h2" fontSize="3xl" isLoaded={typeof metadata?.name === 'string'}>
            {metadata?.name}
          </SkeletonText>

          <SkeletonText noOfLines={2} mb={4} isLoaded={typeof metadata?.description === 'string'}>
            {metadata?.description}
          </SkeletonText>

          <SkeletonText noOfLines={2} mb={4} isLoaded={Boolean(owner)}>
            Owned by: {owner}
          </SkeletonText>

          <Button
            as="a"
            href={`https://testnets.opensea.io/assets/avalanche-fuji/${process.env.NEXT_PUBLIC_NEKA_ADDRESS}/${tokenId}`}
            target="_blank"
            colorScheme="blue"
          >
            View on OpenSea
          </Button>
        </Box>
      </Flex>

      <Flex mt={8} justifyContent="space-between">
        {typeof tokenId === 'number' && (
          <NextLink href={`/nekadex/${tokenId - 1}`} passHref>
            <Button disabled={!tokenId || tokenId === 1} as={Link}>
              Previous
            </Button>
          </NextLink>
        )}
        {typeof tokenId === 'number' && (
          <NextLink href={`/nekadex/${tokenId + 1}`} passHref>
            <Button as={Link}>Next</Button>
          </NextLink>
        )}
      </Flex>
    </>
  );
};

export default TokenPage;
