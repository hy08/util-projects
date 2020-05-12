import { Request, Response } from 'express';
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // GET POST 可省略
  'GET /api/demo': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        helloworld: 'hello world',
      });
    }, 1000);
  },
}