import { useRouter } from "next/router";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Head from "next/head";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const prevVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return <p>No such movie found!</p>;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>

      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>{" "}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`cover image of ${title}`}
        width={140}
        height={230}
      ></Image>
      {prevVolume ? (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>
            ← Previous Volume: {prevVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
