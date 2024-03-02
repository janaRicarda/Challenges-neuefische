import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const StyledDiv = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: black;
`;
const StyledH1 = styled.h1`
  font-family: var(--font-family);
  font-size: 50px;
`;

const StyledArticle = styled.article`
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ $color }) => $color};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $prevColor, $nextColor, $color }) =>
    $prevColor ? $prevColor : $nextColor ? $nextColor : $color};
  cursor: mousover;
  border-radius: 10px;
`;

const StyledPrevDiv = styled.div`
  background-color: black;
  color: ${({ $prevColor }) => $prevColor};
  padding: 0.3rem;
  border-radius: 10px;
  flex: 1;
  text-align: left;
  padding-left: 0;
`;

const StyledNextDiv = styled.div`
  background-color: black;
  color: ${({ $nextColor }) => $nextColor};
  padding: 0.3rem;
  border-radius: 10px;
  flex: 1;
  text-align: right;
  padding-right: 0;
`;

const StyledLinkSection = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
`;

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { slug, color } = router.query;
  const city = cities.find((city) => city.slug === slug);

  const cityIndex = cities.findIndex((city) => city.slug === slug);

  const prevCity = cities[cityIndex - 1];
  const nextCity = cities[cityIndex + 1];

  if (!city) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <StyledDiv>
        <StyledLink $color={city.color} href="/cities">
          {" "}
          ⬅ Go back to city list
        </StyledLink>
        <StyledArticle $color={city.color}>
          <StyledH1>{city.name}</StyledH1>
          <p>{city.description}</p>
        </StyledArticle>
        <StyledLinkSection>
          {prevCity ? (
            <StyledPrevDiv $prevColor={prevCity.color}>
              <StyledLink
                $prevColor={prevCity.color}
                href={`/cities/${prevCity.slug}`}
              >
                ← {prevCity.name}
              </StyledLink>
            </StyledPrevDiv>
          ) : null}
          {nextCity ? (
            <StyledNextDiv $nextColor={nextCity.color}>
              <StyledLink
                $nextColor={nextCity.color}
                href={`/cities/${nextCity.slug}`}
              >
                {nextCity.name} →
              </StyledLink>
            </StyledNextDiv>
          ) : null}
        </StyledLinkSection>
      </StyledDiv>
    </>
  );
}
