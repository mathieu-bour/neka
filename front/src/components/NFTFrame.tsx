import { FC } from 'react';
import useNFT from '../hooks/useNFT';
import Frame from './Frame';

interface NFTFrameProps {
  tokenId: number | null;
  size?: number;
}

const NFTFrame: FC<NFTFrameProps> = ({ tokenId, size = 300 }) => {
  const { metadata } = useNFT(tokenId);
  return <Frame src={metadata?.image} />;
};
export default NFTFrame;
