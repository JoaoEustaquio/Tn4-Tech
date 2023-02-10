import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from '@mui/material';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/Catalog.css";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://m.media-amazon.com/images/I/613yvYP-TkL._AC_SY450_.jpg"
      />
      <CardContent>
        <Typography className="title" gutterBottom variant="h5" component="div">
          Kit Pc Gamer, teclado, mouse e monitor
        </Typography>
        <Typography className="config" variant="body2" color="text.secondary">
          CONFIGURAÇÕES
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" className="buyBTN">COMPRAR AGORA</Button>
      </CardActions>
    </Card>
  );
}
