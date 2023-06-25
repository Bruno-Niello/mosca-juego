import { Container, Box } from "@mui/material";
import { Menu } from "../../components/Menu";

export const Home = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt={4}
        height="100%"
      >
        <Box top="50%" left={0} right={0} position="absolute">
          <Menu />
        </Box>
      </Box>
    </Container>
  );
};
