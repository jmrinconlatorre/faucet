import { Outlet } from 'react-router-dom';
import { Header } from './header';

export function Dashboard() {
  return (
    <div className='container'>
      <Header />
      <h1 className='text-3xl font-bold underline'>Dashboard</h1>
      <Outlet />
    </div>
  );
}
