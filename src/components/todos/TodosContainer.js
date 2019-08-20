import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';

const TodosContainer = ( { todos }) => {
    return (
      <ul>
        {todos.map( todo => <Todo todo={todo}/> )}
      </ul>
    )
}

export default connect(s => s)(TodosContainer);
