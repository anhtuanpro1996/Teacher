import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/UserActions';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodoAction } from '../actions/TestActions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// import {useInput from '../helpers/hooks';


const TodoApp = (props) => {
  const { users, actions } = props;
  // const { todos } = props.todos;
  // const [data,setData]= useState({name:'',username:''});
  // const toggleComplete = (todoId) => {
  //   props.toggleTodoComplete(todoId);
  // };
  // const deleteTodo = (todoId) => {
  //   props.deleteTodoAction(todoId);
  // };

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const changeName = (e) =>{
    setName(e.target.value);
  };
  const changeuserName = (e) =>{
    setUsername(e.target.value);
  };


  const handleSubmit = (e)=>{
    e.preventDefault();
    actions.createPost({'name': name, 'username': username});
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>

          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            autoFocus
            value={name}
            onChange={changeName}

          />,

        </Form.Item>
        <Form.Item>

          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="userName"
            value={username}
            onChange={changeuserName}
          />,

        </Form.Item>
        <Form.Item>

          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(UserActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
