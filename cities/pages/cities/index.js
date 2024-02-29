import { cities } from "@/lib/data";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2rem;
  padding: 1rem;
  @media (prefers-color-scheme: dark) {
    background-color: black;
    color: white;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const StyledListItem = styled.li`
  padding: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: mousover;
  padding: 1rem;
  border-radius: 6px;
  &:hover {
    color: ${({ $color }) => $color}; 
    background-color: black;
    
`;

export default function Cities() {
  return (
    <StyledDiv>
      <Head>
        <title>cities</title>
      </Head>
      <h1>Cities</h1>
      <StyledList>
        {cities.map((city) => (
          <StyledListItem key={city.id}>
            <StyledLink $color={city.color} href={`cities/${city.slug}`}>
              {city.name}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledDiv>
  );
}
