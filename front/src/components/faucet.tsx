import { UserContext } from '@/App';
import { useContext } from 'react';

export function Faucet() {
  const { state, setState } = useContext(UserContext);

  return <div>{state.acc}</div>;
}
