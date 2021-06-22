import ResultTable from "./ResultTable/ResultTable";
import SearchBox from "./SearchBox/SearchBox";
import styled from "styled-components";

const Container = styled.div``;

const Main = () => {
  return (
    <Container>
      <SearchBox />
      <ResultTable />
    </Container>
  );
};

export default Main;
