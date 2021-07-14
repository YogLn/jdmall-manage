import request from './request';

export function selectOrderBySeller(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}

// 取消订单
export function cancelOrderById(data) {
  return request({
    url: `/mall/order/cancels`,
		method: 'p'
		data
  })
}