import React, { Component } from 'react';
import { connect, ConnectProps } from 'umi';
import { Spin } from 'antd';
import { ConnectState } from '@/models/connect';
import { MockData } from '@/models/demo';
import styles from './index.less';

export interface DemoProps extends Partial<ConnectProps> {
  demoData: MockData,
  mockingData?: boolean;
  title: string;
  intro?: {
    content: string
  };
}
interface DemoState {
  content: string;
}
class Demo extends Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);
    this.state = {
      content: '这是内容'
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'demo/mockData',
      });
    }
  }

  render() {
    const { title, intro, demoData, mockingData } = this.props;
    const { content } = this.state;
    return (
      <div className={styles.demo}>
        <div className={styles.container}>
          {mockingData ?
            <Spin />
            :
            <>
              <p className={styles.title}>标题：{title}</p>
              <p className={styles.content}>内容：{content}</p>
              <p className={styles.intro}>介绍：{intro?.content}</p>
              <p className={styles.intro}>mock数据：{demoData.helloworld}</p>
            </>}
        </div>
      </div>
    );
  }
}

export default connect(({ demo, loading }: ConnectState) => ({
  demoData: demo.data,
  mockingData: loading.effects['demo/mockData'],
}))(Demo);