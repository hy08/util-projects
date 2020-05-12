import request from '@/utils/request';

const gatwayName: string = '/api';

export async function getMockDemo() {
  return request(`${gatwayName}/demo`, { method: 'GET' });
}