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

  render() {
    const { todoList, loading } = this.props;
    return (
      <div className={styles.normal}>
        <TodoList list={todoList} loading={loading} />
      </div>
    );
  }
}

export default connect(({ todoList, loading }: ConnectState) => ({
  todoList: todoList.todoList,
  loading: loading.effects['todoList/initTodoList'],
}))(Home);
