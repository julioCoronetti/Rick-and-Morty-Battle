import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const hasCharacters = localStorage.getItem("myCharacters");
    const hasKey = localStorage.getItem("generationKey");

    if (!hasCharacters && !hasKey) {
      localStorage.setItem("generationKey", "1");
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
