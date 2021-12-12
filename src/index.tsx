// Add IE11 support
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-shim';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import { ERKENNINGEN_GRAPHQL_API_URL, ERKENNINGEN_SITE_TYPE } from '@erkenningen/config';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import App from './App';

import { ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';
import { ThemeContext } from '@erkenningen/ui/layout/theme';
import './index.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: (createUploadLink({
    uri: ERKENNINGEN_GRAPHQL_API_URL,
    credentials: 'include',
  }) as unknown) as ApolloLink,
  cache,
});

ReactDOM.render(
  <ThemeContext.Provider value={{ mode: ERKENNINGEN_SITE_TYPE }}>
    <ApolloProvider client={client}>
      <ThemeBureauErkenningen>
        <App />
      </ThemeBureauErkenningen>
    </ApolloProvider>
  </ThemeContext.Provider>,
  document.getElementById('erkenningen-module-request-license'),
);
