import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#BD0029'
        },
        secondary: {
            main: '#BD0029'
        }
    },
    typography: {
        fontFamily: 'work-sans, sans-serif',
        allVariants: {
            color: '#001219'
        },
        button: {
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 0
    },
})