import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './page/index';
import reportWebVitals from './reportWebVitals';

import 'rsuite/dist/styles/rsuite-dark.css';
import { theme, Theme } from './style/Theme';
import { ThemeProvider } from 'styled-components';

// export const ThemeContext = React.createContext<Theme>(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
