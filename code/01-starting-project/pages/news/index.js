// our-domain.com/news
import Link from "next/link"; // special component to build links to allow SPA. renders anchor tags and watches for links. prevents browser default and loads the component and url
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next JS is a greate framework
          </Link>
        </li>
        <li>Another one</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
