import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom"; // useRouteLoader data instead of useLoaderData so we can specify which id to use the loader

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  // const params = useParams();

  // const data = useRouteLoaderData("event-detail"); // takes an argument as the routeId
  const { event, events } = useRouteLoaderData("event-detail"); // with defer, we store event and events data in destructured object

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
export default EventDetailPage;

async function loadedEvent(id) {
  // loader() function for api call moved here
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// copied from Events.js
async function loadedEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};   // this is one way to handle error

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {   // React router will render the closest error element. This is the preferred way and can be caught by useRouteError from ErrorPage.js
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 }); // can be used to build response with less effort. creates a response object that includes data in json format (import json). another alternative to above
  } else {
    const resData = await response.json();
    return resData.events;
  }

  // recommended way to handler loader -> inside the component where it is needed/to be used
  // we cannot use react hooks (ie useState) in the loader
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: loadedEvent(id), // await keyword tells defer to wait for this data to be loaded before loading this page component, then load loadedEvents after
    events: loadedEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}
