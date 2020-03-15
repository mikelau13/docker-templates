import gql from 'graphql-tag';

export const GET_HEALTHCHECKS = gql`
  query healthChecks {
    healthChecks {
      id
      name
    }
  }
`;
