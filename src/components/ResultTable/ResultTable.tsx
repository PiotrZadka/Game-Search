import React from "react";
import styled from "styled-components";
import SAMPLE_DATA from "../../sampleData.json";

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

const ResultTable = () => {
  return (
    <Box>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SAMPLE_DATA.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Box>
  );
};

export default ResultTable;
