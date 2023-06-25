import { Box, Button, Typography } from "@mui/material";
import { useMyContext } from "../../context/useContext";
import { useContext } from "react";
import { NavegationLink } from "../NavegationLink/index";

export const NavBar = () => {
  const { isGaming, setIsGaming } = useContext(useMyContext);
  return (
    <Box
      bgcolor="black"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      position="relative"
      pl={5}
      pr={5}
      pt={1}
      pb={1}
    >
      <Typography
        color="white"
        position="absolute"
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          textAlign: "center",
          transform: "translateY(-50%)",
        }}
      >
        MOSCA GAME
      </Typography>
      {isGaming && (
        <Button onClick={() => setIsGaming(false)} variant="outlined">
          <NavegationLink path="/" text="Exit" />
        </Button>
      )}
    </Box>
  );
};
