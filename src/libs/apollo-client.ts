import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const getGithubClient = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.GITHUB_API}`,
      headers: {
        authorization: `bearer ${process.env.GITHUB_API_KEY}`,
      },
      fetchOptions: {
        next: { revalidate: 10 },
      },
    }),
    cache: new InMemoryCache(),
  });
});

export const getLeetCodeClient = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.LEETCODE_API}`,
      fetchOptions: {
        next: { revalidate: 10 },
      },
    }),
    cache: new InMemoryCache(),
  });
});
