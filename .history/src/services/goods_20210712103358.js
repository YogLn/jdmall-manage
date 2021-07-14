import request from './request';

export function getGoodsList(param) {
  return request({
    url: '/mall/goods/list',
    param
  }) 
}