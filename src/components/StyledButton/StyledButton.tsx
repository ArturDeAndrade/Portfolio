import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        padding: '5px 15px',
        border: `2px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: '4px',
        backgroundColor: 'transparent',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            border: `2px solid ${theme.palette.secondary.dark}`,
            backgroundColor: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.dark,
        },
    }))

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton