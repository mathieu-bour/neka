import { useMemo } from 'react';
import { Neka, Neka__factory } from '@neka/blockchain';
import { useWeb3React } from '@web3-react/core';
import useJsonProvider from './useJsonProvider';

export default function useNeka(): Neka {
  const json = useJsonProvider();
  const { isActive, provider } = useWeb3React();
  const theProvider = isActive && provider ? provider.getSigner() : json;

  return useMemo(() => {
    return Neka__factory.connect(process.env.NEXT_PUBLIC_NEKA_ADDRESS!, theProvider);
  }, [theProvider]);
}
