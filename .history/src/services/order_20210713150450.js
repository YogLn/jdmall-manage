import request from './request';

export function register(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`,
  })
}