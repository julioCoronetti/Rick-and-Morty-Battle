import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Router />

        <Footer />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
