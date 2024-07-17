import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps{
    children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {
    const StyledButton = styled('button')(({theme}) =>({
        color: theme.palette.primary.contrastText,
        backgroundColor: 'transparent',
        padding: '5px 15px',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '3px',
        cursor: 'pointer',
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
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
export default StyledButton;