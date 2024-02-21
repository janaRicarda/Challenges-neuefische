import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
export default function theReturnOfTheKing() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
        alt="book cover volume 3"
        width={140}
        height={230}
      ></Image>
      <Link href="the-two-towers">previous</Link>
    </>
  );
}
