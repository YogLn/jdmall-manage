import request from './request';

export function selectOrderBySeller(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}

// 取消订单
export function cancleOrderBySeller(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}