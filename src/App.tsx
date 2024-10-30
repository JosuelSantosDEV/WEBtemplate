import React from "react";
import Layout from "./layout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/Default";
import { BrowserRouter } from "react-router-dom";


const  App: React.FC = () => {
  return (
    <>
        <BrowserRouter>
          <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles/>
            <Layout/>
          </ThemeProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
