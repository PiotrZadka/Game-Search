import React from "react";
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

const ResultTable = ({ listOfGames }: any) => {
  console.log(listOfGames);
  return (
    <Box>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>Metacritic Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfGames.map(
            (item: {
              id: number;
              name: string;
              released: string;
              metacritic: number;
            }) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.released}</TableCell>
                <TableCell align="right">{item.metacritic}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

export default ResultTable;
