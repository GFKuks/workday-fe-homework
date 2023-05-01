import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import "./styles/main.css";

import { store } from './store';
import { Layout } from './layout';
import { CurrencyRatesPage } from './pages';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Layout>
            <CurrencyRatesPage />
        </Layout>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
