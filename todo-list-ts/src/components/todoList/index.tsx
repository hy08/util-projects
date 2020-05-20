import React, { Component } from 'react';
import { Dispatch } from 'umi';
import { Spin } from 'antd';
import { TodoItem } from '@/models/todoList/todoList';
import styles from './index.less';

export interface Props {
  list: TodoItem[];
  loading?: boolean;
  dispatch?: Dispatch;
}
export default class TodoList extends Component<Props> {
  render() {
    const { list, loading } = this.props;
    return (
      <div className={styles.container}>
        {/* {loading ? (
          <Spin />
        ) : (
          <>
            <p className={styles.title}>标题：{title}</p>
            <p className={styles.content}>内容：{content}</p>
            <p className={styles.intro}>介绍：{intro?.content}</p>
            <p className={styles.intro}>mock数据：{demoData.helloworld}</p>
          </>
        )} */}
      </div>
    );
  }
}
