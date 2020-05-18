import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import {useMutation} from "@apollo/client";

const DecrementView = ({ onDecrement }) => (
  <button onClick={onDecrement}>-</button>
);

DecrementView.propTypes = {
  onDecrement: PropTypes.func.isRequired,
};

const DECREMENT_COUNTER = gql`
  mutation {
    decrementCounter @client
  }
`;

export default function Decrement() {
  const [decrementCounter] = useMutation(DECREMENT_COUNTER);
  return <DecrementView onDecrement={decrementCounter} />;
}
