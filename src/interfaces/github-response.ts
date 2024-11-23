export interface IGitHubStats {
  user: {
    contributionsCollection: {
      totalCommitContributions: number;
    };
    repositoriesContributedTo: {
      totalCount: number;
    };
    pullRequests: {
      totalCount: number;
    };
    openIssues: {
      totalCount: number;
    };
    closedIssues: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
      nodes: Array<{
        stargazers: {
          totalCount: number;
        };
        name: string;
      }>;
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  };
}
