import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

// import { Button } from "./Components/Button";
import { GlobalStyle } from "./styles/global";
import { CyclesContextProvider } from "./contexts/CyclesContext";
// import { Home } from "./Home";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* <Button variant="primary"></Button>
        <Button variant="secondary"></Button>
        <Button variant="success"></Button>
        <Button variant="danger"></Button>
        <Button></Button> */}
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>

        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </>

    // <Home></Home>
  );
}
