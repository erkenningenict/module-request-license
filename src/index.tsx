// window.global ||= window;
if (typeof window !== 'undefined') {
  window.global = window;
}
import React from 'react';
import ReactDOM from 'react-dom';

// import { ERKENNINGEN_GRAPHQL_API_URL } from '@erkenningen/config';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import App from './App';

import { ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';
import { ThemeContext } from '@erkenningen/ui/layout/theme';
import './index.css';

console.log('#DH# 1');
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createUploadLink({
    uri: import.meta.env.VITE_APP_ERKENNINGEN_GRAPHQL_API_URL as string,
    credentials: 'include',
  }) as unknown as ApolloLink,
  cache,
});

ReactDOM.render(
  <ThemeContext.Provider value={{ mode: 'admin' }}>
    <ApolloProvider client={client}>
      <ThemeBureauErkenningen>
        <App />
      </ThemeBureauErkenningen>
    </ApolloProvider>
    ,
  </ThemeContext.Provider>,
  document.getElementById('erkenningen-module-request-license'),
);

// ReactDOM.render(<div>TEST</div>, document.getElementById('erkenningen-module-request-license'));
