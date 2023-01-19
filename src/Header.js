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
                    fontFamily: 'bold',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="" className="Header-btn" size="large">
                    <Button style={{ fontFamily: 'Lexend Deca', fontSize: '2,9vh' }} role="link" onClick={() => openInNewTab('')} >PC Gamer</Button>
                    <Button style={{ fontFamily: 'Lexend Deca', fontSize: '2,9vh' }}  role="link" onClick={() => openInNewTab('')}>PC Corporativo</Button>
                    <Button style={{ fontFamily: 'Lexend Deca', fontSize: '2,9vh' }}  role="link" onClick={() => openInNewTab('')}>Notebook</Button>
                    <Button style={{ fontFamily: 'Lexend Deca', fontSize: '2,9vh' }}  role="link" onClick={() => openInNewTab('https://wa.link/tses2v')}>Fale Conosco</Button>
                    <Button style={{ fontFamily: 'Lexend Deca', fontSize: '2,9vh' }}  role="link" onClick={() => openInNewTab('')}>Faça uma Visita</Button>
                </ButtonGroup>
            </Box>

            <Box>
                <Box className='SocialMedia'>                
                    <img style={{ marginRight: '2rem' }} role="link" onClick={() => openInNewTab('https://www.instagram.com/tn4.tech/')} className="InstaLogo" src='./Insta_Logo.png' alt='InstaLogo' />
                    <img style={{ marginRight: '2rem' }} role="link" onClick={() => openInNewTab('https://wa.link/tses2v')} className="ZapLogo" src='./Zap_Logo.png' alt='ZapLogo' />
                    <img role="link" onClick={() => openInNewTab('https://wa.link/tses2v')} className="FaceLogo" src='./Facebook_Logo.png' alt='FaceLogo' />
                </Box>
            </Box>
        </Box>
    );
}
