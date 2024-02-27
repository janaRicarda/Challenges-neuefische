import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

const StyledMain = styled.main`
  padding: 1rem;
  @media (prefers-color-scheme: dark) {
    background-color: var(--color-earth);
    color: var(--color-clouds);
  }
`;

const StyledH1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledP = styled.p`
  font: var(--font-body);
  margin-bottom: 2rem;
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: var(--font-family);
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font: var(--font-caption);
  @media (prefers-color-scheme: dark) {
    color: var(--color-clouds);
  }
`;

const StyledImage = styled(Image)`
  display: block;
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

export default function Volumes() {
  return (
    <>
      <StyledMain>
        <StyledH1>The Lord of the Rings</StyledH1>
        <StyledP>{introduction}</StyledP>
        <StyledH2>All Volumes</StyledH2>
        <StyledList>
          {volumes.map((volume) => (
            <StyledListItem key={volume.id}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                <StyledImage
                  src={volume.cover}
                  alt={`image of ${volume.title}`}
                  width={100}
                  height={150}
                />
                {volume.title}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledMain>
    </>
  );
}
