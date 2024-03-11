import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductList() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) <h1>Loading...</h1>;

  if (!products) {
    return;
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <br></br>
            {product.description}
          </li>
        ))}
      </ul>
    </>
  );
}
