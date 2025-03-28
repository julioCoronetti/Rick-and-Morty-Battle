import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
