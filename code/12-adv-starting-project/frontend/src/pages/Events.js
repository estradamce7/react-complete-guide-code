// import { useEffect, useState } from 'react';
import { Suspense } from "react"; // Suspense component can be used in certain situations to show a fallback while waiting for other data to arrive
import { useLoaderData, json, defer, Await } from "react-router-dom"; // we need this to allow us to access the closest loader data

import EventsList from "../components/EventsList";

function EventsPage() {
  // we can remove all these
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);

  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  // const data = useLoaderData(); // If we will use fetched data here, uncomment code. This will contain data returned by the loader. useLoader will automatically give us the data that's part of the response

  // use obj destructing now to get events key
  const { events } = useLoaderData();

  // if(data.isError) {    // this is one way to handle error
  //   return <p>{data.message}</p>
  // }

  // const events = data.events;
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await> {/* with the use of defer,  */} {/* resolve here wants one of our deferred values as its value */}
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents(){
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};   // this is one way to handle error

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {   // React router will render the closest error element. This is the preferred way and can be caught by useRouteError from ErrorPage.js
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 }); // can be used to build response with less effort. creates a response object that includes data in json format (import json). another alternative to above

    // setError('Fetching events failed.');   // we don't set state values here
  } else {
    const resData = await response.json();
    return resData.events;
    // const resData = await response.json();
    // const res = new Response('any data', {status: 201});   // we can create a Response object. This is built in to the browser to help use build our own responses. This is all happening in the browser.
    // // it takes any data as the first arg, and can configure with more details with an extra object as the 2nd arg

    // return res;
    // // return resData.events; // React router automatically takes any value returned and makes it available to the page that is being rendered here and any other components
    // // setFetchedEvents(resData.events);      // we don't set state values here
  }

// recommended way to handler loader -> inside the component where it is needed/to be used
// we cannot use react hooks (ie useState) in the loader
}

export function loader() {
  // we don't want to away the events to load
  // defer is a function that must be executed. defer can help speed up our page and lets others load some content if this takes time
  return defer({ // we can bundle all http requests we have going on this page in this object
    events: loadEvents(),    // execute the fn. needs to return a promise (something returned) for this to work
  });
}