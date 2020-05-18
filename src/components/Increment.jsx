import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import {useMutation} from "@apollo/client";

const IncrementView = ({ onIncrement }) => (
  <button onClick={onIncrement}>+</button>
);

IncrementView.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

const INCREMENT_COUNTER = gql`
  mutation {
    incrementCounter @client
  }
`;

export default function Increment() {
  const [incrementCounter] = useMutation(INCREMENT_COUNTER);
  return <IncrementView onIncrement={incrementCounter} />;
}
