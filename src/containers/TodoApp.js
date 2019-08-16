// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import Header from '../components/Header';
// import MainSection from '../components/MainSection';
// import * as TodoActions from '../actions/TodoActions';

// class TodoApp extends Component {
//   render() {
//     const { todos, actions } = this.props;

//     return (
//       <div>
//         <Header addTodo={actions.addTodo} />
//         <MainSection todos={todos} actions={actions} />
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     todos: state.todosReducers
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);


import React from 'react';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodoAction } from '../actions/TestActions';

const TodoApp = (props) => {
  const { todos, actions } = props;
  // const { todos } = props.todos;
  console.log('koko', todos);
  const toggleComplete = (todoId) => {
    props.toggleTodoComplete(todoId);
  };
  const deleteTodo = (todoId) => {
    props.deleteTodoAction(todoId);
  };

  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todosReducers,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
