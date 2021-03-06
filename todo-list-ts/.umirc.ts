import { defineConfig } from 'umi';

// ref: https://umijs.org/config/
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  title: 'todo-list-ts',
  routes: [
    {
      path: '/',
      component: '../layouts/index', //component路径相对于src/pages
      routes: [
        { path: '/', component: '../pages/index' },
      ]
    }
  ],
});
