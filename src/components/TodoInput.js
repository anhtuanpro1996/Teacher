import React, { useState } from 'react';
// import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/TestActions';

const TodoInput = (props) => {
  const [todo, setTodo] = useState('');
  console.log("b",todo);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("a",props);
    props.addTodoAction({
      id: 2,
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todos: state.testReducer
});

export default connect(
  mapStateToProps,
  { addTodoAction }
)(TodoInput);
