import { Outlet } from 'react-router-dom';    // Outlet - marks the place where child route elemnets should be rendered to

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>
  </>
}
export default RootLayout;