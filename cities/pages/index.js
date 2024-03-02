import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2rem;
  padding: 1rem;
  border: 1px solid pink;
  border-radius: 10px;
`;

const StyledH1 = styled.h1`
  font-family: var(--font-family);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  cursor: mousover;
  &:hover {
    color: coral;
  }
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CityApp</title>
      </Head>
      <StyledDiv>
        <StyledH1>Welcome to my cities App.</StyledH1>
        <StyledLink href="/cities">Go to cities →</StyledLink>
      </StyledDiv>
    </>
  );
}
