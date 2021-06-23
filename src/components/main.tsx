import ResultTable from "./ResultTable/ResultTable";
import SearchBox from "./SearchBox/SearchBox";
import styled from "styled-components";
import { useState } from "react";
import fetchGameByName from "../helpers/fetchGameByName";

const Container = styled.div``;

const Main = () => {
  const [listOfGames, setListofGames] = useState<IGame[]>([]);

  const updateListofGames = async (title: string) => {
    await fetchGameByName(title).then((data: IGame[]) => {
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

interface IGame {
  id: number;
  name: string;
  released: string;
  metacritic: number;
}

export default Main;
