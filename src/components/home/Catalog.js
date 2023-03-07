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
    <Card sx={{ maxWidth: 365 }}>
      <CardMedia
        component="img"
        image="https://m.media-amazon.com/images/I/613yvYP-TkL._AC_SY450_.jpg"
      />
      <CardContent className="catalogCard" >
        <Typography className="title" gutterBottom variant="h5" component="div">
          Kit Pc Gamer, teclado, mouse e monitor
        </Typography>
        <Typography className="config" variant="body2" color="text.secondary">
          CONFIGURAÇÕES
        </Typography>

        <img sx={{ maxWidth: 36 }} className="TN4Logo" src='./pix-icon.png' alt='TN4Logo' />
        <Typography className="title" gutterBottom variant="h5" component="div">
          R$4590,00 no PIX
        </Typography>


        <Typography className="title" gutterBottom variant="h5" component="div">
          R$4890,00 em até 10x no cartão SEM JUROS
        </Typography>

        <CardActions className="buyBTN">
          <Button size="large" className="buyBTN2" >COMPRAR AGORA</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
