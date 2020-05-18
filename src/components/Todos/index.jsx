import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import {useQuery} from '@apollo/client'
import Todo from './Todo';


const TodosView = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo
        completed={todo.completed}
        id={todo.id} 
        key={todo.id}
        text={todo.text}
      />
    ))}
  </div>
);

TodosView.propTypes = {
  todos: PropTypes.array.isRequired,
};

const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
  }
`;

export default function Todos() {
  const {data} = useQuery(GET_TODOS);
  if(data && data.todos) {
    return <TodosView todos={data.todos} />;
  }
}