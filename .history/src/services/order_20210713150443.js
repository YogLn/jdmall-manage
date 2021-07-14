import request from './request';

export function register(data) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`,
    method: 'POST',
    data
  })
}