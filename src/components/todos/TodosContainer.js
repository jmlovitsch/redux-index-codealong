import React, { Component } from "react";
import uuid from 'uuid'
import Todo from "./Todo";
import {connect} from 'react-redux'

 class TodosContainer extends Component {

  render() {
    const todos = this.props.todos.map((t) =>  <Todo key={uuid} text={t} />);
    return <div><ul>{todos}</ul></div>;
  }
}

export default connect (state=>({todos: state.todos}), null )(TodosContainer)
