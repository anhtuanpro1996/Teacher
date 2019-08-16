import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

// export default class Header extends Component {
//   static propTypes = {
//   	addTodo: PropTypes.func.isRequired
//   };

//   constructor() {
//   	super();
//   	autoBind(this);
//   }

//   handleSave(text) {
//   	if (text.length !== 0) {
//   		this.props.addTodo(text);
//   	}
//   }

//   render() {
//   	return (
//   		<header className='header'>
//   			<h1>todos</h1>
//   			<TodoTextInput newTodo={true}
//   				onSave={this.handleSave}
//   				placeholder='What needs to be done?' />
//   		</header>
//   	);
//   }
// }

function Header(props) {
  console.log('prop', props);
  const handleSave = (text) => {
    if (text.length !== 0) {
      props.addTodo(text);
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput newTodo
        onSave={handleSave}
        placeholder="What needs to be done?" />
    </header>
  );
}
export  default Header;
