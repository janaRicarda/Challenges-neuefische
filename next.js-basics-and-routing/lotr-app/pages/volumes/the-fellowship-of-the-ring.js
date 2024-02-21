import { volumes } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
export default function theFellowshipOfTheRings() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={book.cover}
        alt="book cover volume 1"
        width={140}
        height={230}
      ></Image>
      <Link href="the-two-towers">Next</Link>
    </>
  );
}
