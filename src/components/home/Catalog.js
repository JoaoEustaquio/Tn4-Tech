import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/Catalog.css";

export default function MediaCard() {
  return (
    <>
      <div className="Cards">
        <Card sx={{ maxWidth: 260, maxHeight: 600 }}>
          <CardMedia
            component="img"
            image="https://shopinfo.vteximg.com.br/arquivos/ids/1351540-1000-1000/1.png?v=638143379900800000"
          />

          <CardContent className="catalogCard">
            <Typography className="title" component="div">
              Kit Pc Gamer, teclado, mouse e monitor
            </Typography>
            <Typography className="config">CONFIGURAÇÕES</Typography>

            <div className="PixPay">
              <img className="PixLogo" src="./pix-icon.png" alt="PixLogo" />
              <Typography className="PixValue" component="div">
                R$4590,00 no PIX
              </Typography>
            </div>

            <div className="CardPay">
              <img className="CardLogo" src="./Card-Icon.png" alt="CardLogo" />
              <Typography className="CardValue" component="div">
                R$4890,00 em até 10x SEM JUROS
              </Typography>
            </div>

            <Button
              classes={{ width: 400 }}
              variant="contained"
              className="buyBTN"
            >
              COMPRAR AGORA
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
