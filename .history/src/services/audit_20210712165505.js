import request from './request';

export function getGoodList(param) {
  return request({
    url: '/mall/admin/audit',
    param: {
      param
    }
  })
}