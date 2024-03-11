import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (isLoading) <h1>Loading...</h1>;
  if (!character) {
    return;
  }
  return (
    <>
      <p>First Name: {character.firstName}</p>
      <p>Last Name: {character.lastName}</p>
      <p>twitter: {character.twitter}</p>
      <p>geohash: {character.geohash}</p>
    </>
  );
}
