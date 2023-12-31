import { createTheme } from "@mui/material";
import { red, } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#146c94", // Purples
        },
        secondary: {
            main: "#FF69B4", // Pink
        },
        error: {
            main: red.A700,
        }
    }
});