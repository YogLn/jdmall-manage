import request from './request';

export function selectOrderBySeller(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}