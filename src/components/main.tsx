import ResultTable from "./ResultTable/ResultTable";
import SearchBox from "./SearchBox/SearchBox";
import styled from "styled-components";
import React, { useState } from "react";
import fetchGameByName from "../helpers/fetchGameByName";

const Container = styled.div``;

const Main = () => {
  const [listOfGames, setListofGames] = useState([]);

  const updateListofGames = async (title: string) => {
    await fetchGameByName(title).then((data) => {
      setListofGames(data);
    });
  };
  return (
    <Container>
      <SearchBox updateListofGames={updateListofGames} />
      <ResultTable listOfGames={listOfGames} />
    </Container>
  );
};

export default Main;
