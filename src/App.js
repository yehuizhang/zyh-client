import './App.css';
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';

import Landing from './routes/Landing';

/**
 * https://material-ui.com/customization/theming/
 */
const theme = responsiveFontSizes(createMuiTheme({}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
