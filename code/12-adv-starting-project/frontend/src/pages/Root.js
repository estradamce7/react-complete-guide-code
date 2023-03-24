import { Outlet } from 'react-router-dom';
// useNavigation is a hook that lets us find out whether we're currently in active transition/loading data or not active transition

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const events = useLoaderData();
  // console.log(events);    // this will not work because we have the data defined on a lower level. any function defined on lower level cannot be retrieved by higher level route

  // const navigation = useNavigation();

  return <>
    <MainNavigation />
    <main>
      {/* {navigation.state === 'loading' && <p>Loading...</p>} */} {/* one option to show user we are loading data */}
      <Outlet />
    </main>
  </>
}

export default RootLayout;