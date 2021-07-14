import request from './request';

export function selectOrder(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}