import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    resolvers,
    defaults,
    typeDefs,
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
