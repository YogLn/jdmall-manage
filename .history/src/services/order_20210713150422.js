import request from './request';

export function register(data) {
  return request({
    url: '/mall/order/register',
    method: 'POST',
    data
  })
}