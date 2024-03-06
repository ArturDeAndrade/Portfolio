import { styled } from "@mui/material"

const StyledBackground = () => {

    const StyledBackground = styled("div")(({ theme }) => ({
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        background: `linear-gradient(-66deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
        backgroundSize: '500% 500%',
        animation: 'banner 15s ease infinite',
        '@keyframes banner': {
            '0%': {
                backgroundPosition: '0% 75%',
            },
            '50%': {
                backgroundPosition: '100% 50%',
            },
            '100%': {
                backgroundPosition: '0% 25%',
            },
        },
    }))

    return (
        <>
            <StyledBackground />
        </>
    )
}

export default StyledBackground