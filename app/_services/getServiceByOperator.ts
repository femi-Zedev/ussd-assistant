import {  gql } from '@apollo/client';

export const GET_SERVICES_BY_OPERATOR = gql`
  query GetServicesByOperator($operator: [Operator!]) {
    services(where: { operators_contains_some: $operator }) {
      title
      description
      code
      operators
      category
      countryCode
    }
  }
`;
