import { Button, CardActions, CardContent, CardMedia, Card as MaterialUICard, Typography } from "@mui/material";
import espada from "../../assets/espada.png";

type CardProps = {
  title: String;
}

export const Card = ({ title }: CardProps) => {
  return <MaterialUICard>
    <CardMedia
      component="img"
      alt="test-sword"
      height="100"
      image={espada} />
    <CardContent>
      <Typography>{title}</Typography>
    </CardContent>
    <CardActions>
      <Button> JUGAR ESTA CARTA</Button>
    </CardActions>
  </MaterialUICard>
};
