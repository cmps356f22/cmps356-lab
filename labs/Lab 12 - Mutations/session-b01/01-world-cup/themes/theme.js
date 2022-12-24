// https://codesandbox.io/s/mui-docs-theme-example-0mys5d?file=/index.tsx
// https://github.com/mui/material-ui/blob/v5.8.0/docs/src/BrandingProvider.tsx

import { useMemo } from "react";
import { deepmerge } from "@mui/utils";
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getDesignTokens, getThemedComponents } from "./branding-theme";

export default function Theme({ children, mode: modeProp }) {
  const upperTheme = useTheme();
  const mode = modeProp || upperTheme.palette.mode;
  const theme = useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    return newTheme;
  }, [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
