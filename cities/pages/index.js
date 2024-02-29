import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2rem;
  padding: 1rem;
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
        <h1>Welcome to my cities App.</h1>
        <StyledLink href="/cities">Go to cities →</StyledLink>
      </StyledDiv>
    </>
  );
}
