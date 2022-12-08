import React from "react";
import { Dashboard } from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components";

import { globalTheme } from "./src/global/theme";

export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
