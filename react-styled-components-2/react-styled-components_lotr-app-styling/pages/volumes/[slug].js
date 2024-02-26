import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
//import  chevron-left  from "../../icons/chevron-left.svg";

const StyledBody = styled.body`
  padding: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font: var(--font-body);
  color: black;
`;

const StyledH1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledP = styled.p`
  font: var(--font-body);
`;

const StyledSection = styled.section`
  background-color: ${({ $color }) => $color};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledUl = styled.ul`
  list-style: none;
  font: var(--font-caption--italic);
  padding-left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledStrong = styled.strong`
  font: var(--font-body);
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <StyledBody>
        <StyledLink href="/volumes">All Volumes</StyledLink>
        <StyledH1>{title}</StyledH1>
        <StyledP>{description}</StyledP>
        <StyledSection $color={volume.color}>
          <StyledUl>
            {books.map(({ ordinal, title }) => (
              <li key={title}>
                {ordinal} <br></br>
                <StyledStrong>{title}</StyledStrong>
              </li>
            ))}
          </StyledUl>
          <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
          />
        </StyledSection>
        {previousVolume ? (
          <div>
            <StyledLink href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </StyledLink>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <StyledLink href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </StyledLink>
          </div>
        ) : null}
      </StyledBody>
    </>
  );
}
