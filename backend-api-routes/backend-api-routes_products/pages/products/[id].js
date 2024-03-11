import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: products, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) <h1>Loading...</h1>;
  if (!products) {
    return;
  }

  return (
    <>
      <h1>{products.name}</h1>
      <p>{products.description}</p>
    </>
  );
}
