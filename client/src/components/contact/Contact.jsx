import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const Icon=styled(Link)`
    margin-right: 5px;
    margin-left:5px;
    position:relative;
    top: 5px
`


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Icon href="https://www.instagram.com/dipanshi_singhal/" color="inherit" target="_blank">
                        <Instagram/>
                    </Icon>
                    or send me an Email 
                    <Icon href="mailto:deepanshisinghal1523@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Icon>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;