import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { ViewQuilt, Email } from '@mui/icons-material'
import Avatar from "../../../../assets/images/am-19-03-04.jpg"
import StyledButton from "../../../../components/StyledButton/StyledButton"
import StyledBackground from "../../../../components/StyledBackground/StyledBackground"

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    }))

    const StyledImage = styled("img")(({ theme }) => ({
        width: '85%',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '50%',
    }))

    return (
        <>
            <StyledBackground />
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <StyledImage src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Artur de Andrade</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Web Developer</Typography>
                            <Grid container spacing={3} display="flex" justifyContent="center" pt={3}>
                                <Grid item xs={8} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <ViewQuilt />
                                        <Typography>Projetos</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={8} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <Email />
                                        <Typography>Contato</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero