import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { UserProvider } from "./contexts/UserProvider";

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
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App;
