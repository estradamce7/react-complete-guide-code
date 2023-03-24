import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );  // by default "relative" prop is default to route definitions (App.js)
}

export default ProductDetailPage;
