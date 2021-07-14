import request from './request';

export function selectOrderBy(seller) {
  return request({
    url: `/mall/order/selectbyseller/${seller}`
  })
}