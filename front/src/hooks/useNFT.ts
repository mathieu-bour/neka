import { useQuery } from '@tanstack/react-query';
import useNeka from './useNeka';

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    display_type?: string;
    trait_type: string;
    value: unknown;
  };
}

export default function useNFT(tokenId: number | null) {
  const neka = useNeka();

  const { data: metadata, isLoading: isLoadingMetadata } = useQuery(
    ['nft.metadata', tokenId],
    async (): Promise<NFTMetadata> => {
      const tokenURI = await neka.tokenURI(tokenId as number);

      return fetch(tokenURI, {
        mode: 'cors',
        headers: {
          accept: 'application/json',
        },
      }).then((res) => res.json());
    },
    { enabled: typeof tokenId === 'number' },
  );

  const { data: owner, isLoading: isLoadingOwner } = useQuery(
    ['nft.owner', tokenId],
    () => neka.ownerOf(tokenId as number),
    {
      enabled: typeof tokenId === 'number',
    },
  );

  return {
    loading: isLoadingMetadata || isLoadingOwner,
    metadata,
    owner,
  };
}
