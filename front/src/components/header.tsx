import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { UserContext } from '@/App';
import { useContext, useEffect } from 'react';

export function Header() {
  const { state, setState } = useContext(UserContext);

  useEffect(() => {
    const ethereum = (window as any).ethereum;
    if (ethereum == null) {
      alert('Metamask no instalado. Instalar metamask');
      return;
    }
    ethereum.request({ method: 'eth_requestAccounts' }).then((acc: string) => {
      ethereum.on('accountsChanged', function (acc: string[]) {
        setState({ acc: acc[0] });
      });

      setState({ acc: acc[0] });
    });
  }, [setState]);

  return (
    <div className='flex gap-2 justify-center pt-4'>
      <Link to='Home'>
        <Button>Home</Button>
      </Link>
      <Link to='faucet'>
        <Button>Faucet</Button>
      </Link>
      <Link to='balance'>
        <Button>balance</Button>
      </Link>
      <Link to='transfer'>
        <Button>Transfer</Button>
      </Link>
      <div className='flex gap-2 justify-center pt-4'>
        {state.acc ? (
          <p>Cuenta seleccionada: {state.acc}</p>
        ) : (
          <div>Cuenta no seleccionada</div>
        )}
      </div>
    </div>
  );
}
