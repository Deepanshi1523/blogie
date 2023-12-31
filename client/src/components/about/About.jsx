import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Code for Interview</Typography>
                <Text variant="h5">I'm a Software Engineer based in India. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Icon href="https://github.com/Deepanshi1523" color="inherit" target="_blank"><GitHub /></Icon>.
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Icon href="https://www.instagram.com/dipanshi_singhal/" color="inherit" target="_blank">
                            <Instagram />
                        </Icon>
                    </Box>  
                        or send me an Email 
                        <Icon href="mailto:deepanshisinghal1523@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Icon>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;