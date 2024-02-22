import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const slug = getRandomElement(volumes).slug;
    router.push(`/volumes/${slug}`);
  }

  return (
    <>
      <Head>
        <title>Übersicht</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Show random volume</button>
    </>
  );
}
