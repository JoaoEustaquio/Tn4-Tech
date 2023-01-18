import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import "@fontsource/lexend-deca";

export default function Header() {
    return (
        <Box className="App-header">
            <img className="TN4Logo" src='./TN4_Logo.png' alt='TN4Logo' />
            <Box
                sx={{
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup className="Header-btn" variant="text" aria-label="text button group">
                    <Button>PC Gamer</Button>
                    <Button>PC Corporativo</Button>
                    <Button>Notebook</Button>
                    <Button href="https://wa.link/tses2v" target="_blank">Fale Conosco</Button>
                    <Button>Faça uma Visita</Button>
                </ButtonGroup>
            </Box>

            <div className="SocialMedia">
                <img className="InstaLogo" src='./Insta_Logo.png' alt='InstaLogo' />
                <img className="ZapLogo" src='./Zap_Logo.png' alt='ZapLogo' />
            </div>
        </Box>
    );
}
