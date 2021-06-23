import ResultTable from "./ResultTable/ResultTable";
import SearchBox from "./SearchBox/SearchBox";
import styled from "styled-components";
import React, {useState} from 'react'
import fetchGameByName from "../helpers/fetchGameByName";

const Container = styled.div``;

const Main = () => {
  const [listOfGames, setListofGames] = useState([])

  const updateListofGames = ( title: string ) =>{
    console.log(title)
    // setListofGames(fetchGameByName(title))
  }
  return (
    <Container>
      <SearchBox updateListofGames={updateListofGames}/>
      <ResultTable />
    </Container>
  );
};

export default Main;
