import { gql } from "@apollo/client";

export const QUERY_CONTENT = gql`
  {
    content {
      _id
      url
      title
      desc
      date
    }
  }
`;
