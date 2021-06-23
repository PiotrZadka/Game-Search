import styled from "styled-components";

import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultTable = ({ listOfGames }: IGames) => {
  return listOfGames.length < 1 ? (
    <></>
  ) : (
    <Box>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Release Date</TableCell>
            <TableCell align="center">Metacritic Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfGames.map((game: IGame) => (
            <TableRow key={game.id}>
              <TableCell component="th" scope="row" align="center">
                {game.id}
              </TableCell>
              <TableCell align="center">{game.name}</TableCell>
              <TableCell align="center">{game.released}</TableCell>
              <TableCell align="center">{game.metacritic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

interface IGame {
  id: number;
  name: string;
  released: string;
  metacritic: number;
}

interface IGames {
  listOfGames: IGame[];
}

export default ResultTable;
