import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/${id}`
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Loading failed...</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
