import { cities } from "@/lib/data";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 10px;
  color: white;
  background-color: black;
`;

const StyledH1 = styled.h1`
  font-family: var(--font-family);
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const StyledListItem = styled.li`
  padding: 0.3rem;
  padding-left: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: mousover;
  &:hover {
    color: ${({ $color }) => $color}; 
    
    
`;

export default function Cities() {
  return (
    <StyledDiv>
      <Head>
        <title>cities</title>
      </Head>
      <StyledH1>Cities to explore...</StyledH1>
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
