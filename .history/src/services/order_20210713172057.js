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
		method: 'put',
		data
  })
}

// 删除订单
export function delOrderById(data) {
  return request({
    url: `/mall/order/delete`,
		method: 'delete',
		data
  })
}

// 删除订单
export function delOrderById(data) {
  return request({
    url: `/mall/order/selectbyuser/{user}`,
		method: 'delete',
		data
  })
}
