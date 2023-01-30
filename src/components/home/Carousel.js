import "../css/Carousel.css";
import "@fontsource/lexend-deca";
import { Carousel } from "antd";
import Box from "@mui/material/Box";
import styled from "styled-components";

const H3 = styled.h3`
height: "160px";
color: "#fff";
line-height: "160px";
text-align: "center";
background: "#364d79";
`;

export default function carousel() {
  // const openInNewTab = (url) => {
  //     window.open(url, '_blank', 'noreferrer');
  // };

  return (
      <Carousel autoplay>
        <div>
          <H3>
            <Box>
              <img
                role="link"
                className="Banner"
                src="./BannerTest.jpg"
                alt="Banner1"
              />
            </Box>
          </H3>
        </div>
        <div>
          <H3>
            <Box>
              <img role="link" src="./BannerTest.jpg" alt="Banner1" />
            </Box>
          </H3>
        </div>
        <div>
          <H3>
            <Box>
              <img role="link" src="./BannerTest.jpg" alt="Banner1" />
            </Box>
          </H3>
        </div>
        <div>
          <H3>
            <Box>
              <img role="link" src="./BannerTest.jpg" alt="Banner1" />
            </Box>
          </H3>
        </div>
      </Carousel>
  );
}
