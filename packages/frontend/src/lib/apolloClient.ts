import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
})

export default client;