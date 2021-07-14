import request from './request';

export function select(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}