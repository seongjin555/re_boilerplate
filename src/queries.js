import gql from "graphql-tag";

export const label_date = gql`
  {
    test_date(date: ${date})
    {
      id
      line
      date
      product
      colour
      account
      weight_o
      weight_p
      standard
      silicon
      producer
    }
  }
`;
