import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 16px;
`;

const SearchBox = ({ updateListOfGames }: any) => {
  const [inputGameName, setInputGameName] = useState("");

  const handleButtonClick = () => {
    updateListOfGames(inputGameName);
  };

  const handleNameInput = (input: any) => {
    setInputGameName(input.target.value);
  };
  return (
    <>
      <Box>
        <Text>Search Game Information</Text>
      </Box>
      <Box>
        <TextField
          data-testid="inputGameTextField"
          onChange={handleNameInput}
          variant="outlined"
          placeholder="Input game name..."
        />
        <Button 
          data-testid="buttonSearch"
          onClick={handleButtonClick} 
          variant="contained" 
          color="primary">
          Search
        </Button>
      </Box>
    </>
  );
};

export default SearchBox;
