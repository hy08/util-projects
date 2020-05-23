import React, { Component } from 'react';
import { Spin, Input, Radio, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import classnames from 'classnames';
import { TodoItem } from '@/models/todoList/todoList';
import styles from './index.less';

export interface Props {
  title: string;
  list: TodoItem[];
  loading?: boolean;
  addTodoItem: (todoItem: TodoItem) => void;
  deleteTodoItem: (id: string) => void;
  changeTodoItemStatus: (id: string) => void;
}
export interface State {
  filterStatus: FilterStatus;
}
enum FilterStatus {
  all,
  done,
  noDone,
}
export default class TodoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filterStatus: FilterStatus.all,
    };
    this.input = React.createRef();
  }
  input: React.RefObject<Input>;
  addTodoItem(value: string) {
    if (value) {
      const todoItem: TodoItem = {
        id: uuid(),
        content: value,
        done: false,
      };
      const { addTodoItem } = this.props;
      addTodoItem(todoItem);
    } else {
      message.error('请输入代办事项');
    }
  }
  changeTodoItemStatus(id: string) {
    const { changeTodoItemStatus } = this.props;
    changeTodoItemStatus(id);
  }
  deleteTodoItem(id: string) {
    const { deleteTodoItem } = this.props;
    deleteTodoItem(id);
  }
  filterTodoItem(value: FilterStatus) {
    this.setState({ filterStatus: value });
  }
  render() {
    const { list, loading, title } = this.props;
    const { filterStatus } = this.state;
    const todoItems = list.filter((item) => {
      if (filterStatus === FilterStatus.all) return true;
      else if (filterStatus === FilterStatus.done) return item.done;
      else return !item.done;
    });
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <Input
            ref={this.input}
            className={styles.input}
            placeholder="请输入待办事项"
            onPressEnter={() => this.addTodoItem(this.input.current!.input.value)}
          />
          {loading ? (
            <Spin />
          ) : (
            <>
              <ul>
                {todoItems.map((todoItem, index) => {
                  return (
                    <li key={todoItem.id} onClick={() => this.changeTodoItemStatus(todoItem.id)}>
                      <span
                        className={classnames({
                          [styles.hasDone]: todoItem.done,
                          [styles.todoContent]: true,
                        })}
                      >
                        {index + 1 + '、' + todoItem.content}
                      </span>
                      <span
                        className={styles.deleteIcon}
                        onClick={() => this.deleteTodoItem(todoItem.id)}
                      >
                        <DeleteOutlined />
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Radio.Group
                onChange={(e) => this.filterTodoItem(e.target.value)}
                value={filterStatus}
              >
                <Radio value={FilterStatus.all}>全部</Radio>
                <Radio value={FilterStatus.done}>已完成</Radio>
                <Radio value={FilterStatus.noDone}>未完成</Radio>
              </Radio.Group>
            </>
          )}
        </div>
      </div>
    );
  }
}
