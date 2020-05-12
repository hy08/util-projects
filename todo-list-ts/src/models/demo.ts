import { Subscription, Reducer, Effect } from 'umi';
import { getMockDemo } from '@/services/demo';

export interface MockData {
  helloworld: string
}
export interface DemoModelState {
  data: MockData
}
interface DemoModelType {
  namespace: 'demo',
  state: DemoModelState,
  effects: {
    mockData: Effect,
  },
  reducers: {
    _saveData: Reducer<DemoModelState>
  },
  subscriptions: {
    setup: Subscription
  }
}

const DemoModel: DemoModelType = {
  namespace: 'demo',
  state: {
    data: {
      helloworld: ''
    },
  },
  subscriptions: {
    setup({ dispatch, history }): void {
    },
  },
  effects: {
    *mockData({ }, { put, call }) {
      const data = yield call(getMockDemo);
      // if (!!data.error) {
      //   return;
      // }
      yield put({ type: '_saveData', payload: data });
    },
  },
  reducers: {
    _saveData(state, { payload }): DemoModelState {
      return { ...state, data: payload };
    }
  },
};

export default DemoModel;
