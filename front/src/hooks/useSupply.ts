import { useQuery } from '@tanstack/react-query';
import useNeka from './useNeka';

export default function useSupply() {
  const neka = useNeka();

  const { data, isLoading } = useQuery(['neka.supply'], () => {
    return Promise.all([neka.totalSupply(), neka.MAX_SUPPLY()]).then(([current, max]) => ({
      current: current.toNumber(),
      max: max.toNumber(),
    }));
  });

  return { ...data, isLoading };
}
