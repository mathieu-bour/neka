import { useMemo } from 'react';
import { StaticJsonRpcProvider } from '@ethersproject/providers';

export default function useJsonProvider() {
  return useMemo(() => new StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL), []);
}
