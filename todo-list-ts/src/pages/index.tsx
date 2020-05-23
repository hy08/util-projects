import React, { Component } from 'react';
import { connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import { TodoItem } from '@/models/todoList/todoList';
import TodoList from '@/components/todoList';
import styles from './index.less';

export interface Props extends Partial<ConnectProps> {
  todoList: TodoItem[];
  loading?: boolean;
}
class Home extends Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'todoList/initTodoList',
      });
    }
  }
  addTodoItem(todoItem: TodoItem) {
    this.props.dispatch!({
      type: 'todoList/_createTodoItem',
      todoItem,
    });
  }
  deleteTodoItem(id: string) {
    this.props.dispatch!({
      type: 'todoList/_deleteTodoItem',
      id,
    });
  }
  changeTodoItemStatus(id: string) {
    this.props.dispatch!({
      type: 'todoList/_changeTodoItemStatus',
      id,
    });
  }
  render() {
    const { todoList, loading } = this.props;
    return (
      <div className={styles.normal}>
        <TodoList
          title="待办事项处理机"
          list={todoList}
          loading={loading}
          addTodoItem={(todoItem) => {
            this.addTodoItem(todoItem);
          }}
          deleteTodoItem={(id) => {
            this.deleteTodoItem(id);
          }}
          changeTodoItemStatus={(id) => {
            this.changeTodoItemStatus(id);
          }}
        />
      </div>
    );
  }
}

export default connect(({ todoList, loading }: ConnectState) => ({
  todoList: todoList.todoList,
  loading: loading.effects['todoList/initTodoList'],
}))(Home);
