import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { Global } from 'utils/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <Global />
      </ThemeProvider>
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
