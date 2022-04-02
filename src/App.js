import AuthLayout from "./AuthLayout/AuthLayout";
import "./styles.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
// import { createTheme } from "@material-ui/core/styles";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout />
    </ThemeProvider>
  );
}
