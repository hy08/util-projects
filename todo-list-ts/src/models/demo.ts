import { Subscription, Reducer, Effect } from 'umi';
import request from '@/utils/request';

const gatwayName: string = '/api';

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
      const data1 = yield call(() => {
        return request(`${gatwayName}/demo`, {
          method: 'GET',
        })
      });
      // if (!!data.error) {
      //   return;
      // }
      yield put({ type: '_saveData', payload: data1 });
    },
  },
  reducers: {
    _saveData(state, { payload }): DemoModelState {
      return { ...state, data: payload };
    }
  },
};

export default DemoModel;
