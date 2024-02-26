import * as React from "react";

import { ThemeProvider } from "@mui/system";
import "./App.css";
import Home from "../src/page";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
