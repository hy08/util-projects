import request from '@/utils/request';

const gatwayName: string = '/api/todo';

export async function getTodoList() {
  return request(`${gatwayName}/todos`, { method: 'GET' });
}
