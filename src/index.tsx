// Add IE11 support
import 'core-js/es/map';
import 'core-js/es/set';
import 'es6-shim';
import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ERKENNINGEN_GRAPHQL_API_URL } from '@erkenningen/config';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from 'react-apollo';

import App from './App';

import { ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';
import './index.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createUploadLink({
    uri: ERKENNINGEN_GRAPHQL_API_URL,
    credentials: 'include',
  }),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeBureauErkenningen>
      <App />
    </ThemeBureauErkenningen>
  </ApolloProvider>,
  document.getElementById('root'),
);
