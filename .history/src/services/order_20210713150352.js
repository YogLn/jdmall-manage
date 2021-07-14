import request from './request';

export function register(data) {
  return request({
    url: '/mall/seller/register',
    method: 'POST',
    data
  })
}