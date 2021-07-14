import request from './request';

export function getGoodList() {
  return request({
    url: '/mall/admin/audit',
    
  })
}