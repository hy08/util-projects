// import { Subscription, Reducer, Effect } from 'umi';
import request from '@/utils/request';

const gatwayName = '/api';

export default {
  namespace: 'demo',
  state: {
    data: [],
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    // },
  },
  effects: {
    // *deviceList({ payload }, { put, call, select }) {
    //   // let data = yield call(service.getCmd, `${gatwayName}/devices/pages`, payload.data);
    //   // if (!!data.error) {
    //   //   return;
    //   // }
    //   // yield put({ type: '_saveDevices', payload: { list: data.list, totalSize: data.totalSize } });
    //   // payload.success && payload.success(data.list)
    // },
  },
  reducers: {
    // _saveDevices(state, { payload }) {
    //   let data = [];
    //   data = payload.list.map((l) => {
    //     return Object.assign(l, { accessStatus: String(l.accessStatus) });
    //   });
    //   return { ...state, devices: data, totalSize: payload.totalSize };
    // }
  },
};
