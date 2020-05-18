import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import {useMutation} from "@apollo/client";

const TodoView = ({ completed, text, onClick }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </div>
);

TodoView.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

export default function Todo({ completed, id, text }) {
    const [toggleTodo] = useMutation(TOGGLE_TODO, {variables: {id}});
    return (
        <TodoView
            completed={completed}
            text={text}
            onClick={toggleTodo}
        />
    );
}
