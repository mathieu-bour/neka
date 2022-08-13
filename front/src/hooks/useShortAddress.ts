import { useWeb3React } from '@web3-react/core';

export default function useShortAddress(length = 4) {
  const { accounts } = useWeb3React();
  const regex = new RegExp(`^(0x[a-fA-F\\d]{${length}}).*([a-fA-F\\d]{${length}})$`);

  if (!accounts?.[0]) {
    return null;
  }

  return accounts[0].replace(regex, '$1...$2');
}
