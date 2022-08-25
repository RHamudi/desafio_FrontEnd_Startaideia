import styled from "styled-components";
import Search from "../Search/Search";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: left;
  font: normal normal 600 42px/50px Source Sans Pro;
  letter-spacing: 0.84px;
  color: #170c3a;
  opacity: 1;
  margin: 3rem 0 1rem 0;
  color: var(--Primary-Color);
`;

const H2 = styled.h2`
  text-align: left;
  font: normal normal 600 30px/36px Source Sans Pro;
  letter-spacing: 0.6px;
  color: #170c3a;
  opacity: 1;
  margin: 1rem 0;
  color: var(--Primary-Color);
`;

function Home() {
  return (
    <Main className="container">
      <H1>VUTTR</H1>
      <H2>Very Useful Tools to Remember</H2>
      <Search />
    </Main>
  );
}

export default Home;
