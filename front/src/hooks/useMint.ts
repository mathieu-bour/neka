import { useRouter } from 'next/router';
import { useState } from 'react';
import { TransferEvent } from '@neka/blockchain/dist/contracts/Neka';
import useNeka from './useNeka';

export default function useMint() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const neka = useNeka();

  const mint = async () => {
    setLoading(true);

    try {
      const tx = await neka.mint();
      const receipt = await tx.wait();
      const transfer = receipt.events?.[0] as TransferEvent | undefined;
      const tokenId = transfer?.args?.tokenId?.toString();

      if (tokenId) {
        await router.push(`/nekadex/${tokenId}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    mint,
    loading,
  };
}
