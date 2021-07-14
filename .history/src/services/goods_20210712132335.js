import request from './request';

export function getGoodsList(param) {
  console.log(param);
  return request({
    url: '/mall/goods/list',
    method: 'GET',
    param
  }) 
}