import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();

  // get the token
  useEffect(() => {
    if (!token) {
      return;
    }

    if(token === 'EXPIRED') {
      submit(null, { action: "/logout", method: "post" }); // clear the token by sending request to logout
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log("remaining time "+tokenDuration);
    // since the backend set expiration to 1 hour, Root will reset the timer when page is refreshed.
    // to amend this, we store the expiration time from the Authentication/where we set the token to localStorage
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" }); // clear the token by sending request to logout
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
