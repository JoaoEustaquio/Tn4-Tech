import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import "@fontsource/lexend-deca";

export default function Header() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

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
                    <Button role="link" onClick={() => openInNewTab('https://wa.link/tses2v')}>Fale Conosco</Button>
                    <Button role="link" onClick={() => openInNewTab('https://wa.link/tses2v')}>Faça uma Visita</Button>
                </ButtonGroup>
            </Box>

            <Box className='SocialMedia'>
                <img role="link" onClick={() => openInNewTab('https://www.instagram.com/tn4.tech/')} className="InstaLogo" src='./Insta_Logo.png' alt='InstaLogo' />
                <img role="link" onClick={() => openInNewTab('https://wa.link/tses2v')} className="ZapLogo" src='./Zap_Logo.png' alt='ZapLogo' />
            </Box>
        </Box>
    );
}
