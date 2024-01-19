import { ERKENNINGEN_GRAPHQL_API_URL } from '@erkenningen/config/dist/index';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

import App from './App';

import { ThemeBureauErkenningen } from '@erkenningen/ui/layout/theme';
import { ThemeContext } from '@erkenningen/ui/layout/theme';
import './index.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createUploadLink({
    uri: ERKENNINGEN_GRAPHQL_API_URL,
    credentials: 'include',
  }) as unknown as ApolloLink,
  cache,
});

import { createRoot } from 'react-dom/client';
const container = document.getElementById('erkenningen-module-request-license');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeContext.Provider value={{ mode: 'admin' }}>
    <ApolloProvider client={client}>
      <ThemeBureauErkenningen>
        <App />
      </ThemeBureauErkenningen>
    </ApolloProvider>
  </ThemeContext.Provider>,
);
