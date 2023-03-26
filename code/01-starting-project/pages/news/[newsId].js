// our-domain.com/news/something-important
// naming the file in [identifier].js will allow dynamic pages w/ parameters
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId; // hold the concrete value in the URL for this dynamic segment
  // with router.query, we can send a request to backend API to fetch the news item with newsId
  
  return <h1>The Detail Page</h1>
}

export default DetailPage;