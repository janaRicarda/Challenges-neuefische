import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-family: var(--font-family);
  text-align: center;
  font-size: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;
  cursor: mousover;
  &:hover {
    color: hotpink;
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
