import "../../components/css/Header.css";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import "@fontsource/lexend-deca";
import { useState } from "react";

export default function Header() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Box className="App-header" style={{zIndex:7}}>
      <img className="TN4Logo" src="./TN4_Logo.png" alt="TN4Logo" />
      <Box
        sx={{
          fontFamily: "bold",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Menu Button */}
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul variant="" className="navigation" size="large">
            <li>
              <a
                style={{ fontFamily: "Lexend Deca", fontSize: "2,9vh" }}
                role="link"
              >
                PC Gamer
              </a>
            </li>
            <li>
              <a
                style={{ fontFamily: "Lexend Deca", fontSize: "2,9vh" }}
                role="link"
              >
                PC Corporativo
              </a>
            </li>
            <li>
              <a
                style={{ fontFamily: "Lexend Deca", fontSize: "2,9vh" }}
                role="link"
              >
                Notebook
              </a>
            </li>
            <li>
              <a
                style={{ fontFamily: "Lexend Deca", fontSize: "2,9vh" }}
                role="link"
                onClick={() => openInNewTab("https://wa.link/tses2v")}
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <a
                style={{ fontFamily: "Lexend Deca", fontSize: "2,9vh" }}
                role="link"
                onClick={() => openInNewTab("")}
              >
                Faça uma Visita
              </a>
            </li>

            <ul variant="" className="SocialMedia" size="large">
              <li>
                <img
                  className="InstaLogo"
                  role="link"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/tn4.tech/")
                  }
                  src="./Insta_Logo.png"
                  alt="InstaLogo"
                />
              </li>
              <li>
                <img
                  role="link"
                  onClick={() => openInNewTab("https://wa.link/tses2v")}
                  className="ZapLogo"
                  src="./Zap_Logo.png"
                  alt="ZapLogo"
                />
              </li>
              <li>
                <img
                  role="link"
                  onClick={() =>
                    openInNewTab("https://www.facebook.com/Tn4tech/")
                  }
                  className="FaceLogo"
                  src="./Facebook_Logo.png"
                  alt="FaceLogo"
                />
              </li>
            </ul>
          </ul>
        </div>
      </Box>
    </Box>
  );
}
