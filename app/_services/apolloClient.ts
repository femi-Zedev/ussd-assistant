import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';

const httpLink = new HttpLink({
  uri: process.env.EXPO_PUBLIC_HYGRAPH_URL,
});
const cache = new InMemoryCache();

async function createApolloClient() {
  // Persist cache with AsyncStorage
  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });

  // Create Apollo Client instance
  return new ApolloClient({
    link: httpLink,
    cache,
  });
}

export default createApolloClient;