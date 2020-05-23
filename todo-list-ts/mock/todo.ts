import { Request, Response } from 'express';
import mockjs from 'mockjs';
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // GET POST 可省略
  'GET /api/todo/todos': mockjs.mock({
    'list|10': [{ id: '@id', content: '@title', done: false }],
  }),
};
