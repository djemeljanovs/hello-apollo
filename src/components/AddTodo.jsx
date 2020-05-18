import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import gql from 'graphql-tag';
import {useMutation} from "@apollo/client";

class AddTodoView extends Component {
  inputEl;

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    const text = this.inputEl.value.trim();
    if (!text) return;
    addTodo({ variables: { text } });
    this.inputEl.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => { this.inputEl = node; }} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodoView.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) @client {
      id
    }
  }
`;

export default function AddTodo() {
  const [addTodo] = useMutation(ADD_TODO);
  return <AddTodoView addTodo={addTodo} />;
}
