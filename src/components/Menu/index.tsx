import { Box, Typography, Button } from "@mui/material";
import { useMyContext } from "../../context/useContext";
import { useContext } from "react";
import { NavegationLink } from "../NavegationLink/index";

export const Menu = () => {
  const { setIsGaming } = useContext(useMyContext);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Typography variant="h4">Welcome to the MOSCA GAME</Typography>
      </Box>
      <Box mt={5}>
        <Button onClick={() => setIsGaming(true)} variant="contained">
          <NavegationLink path="/game" text="New Game" />
        </Button>
      </Box>
    </Box>
  );
};
