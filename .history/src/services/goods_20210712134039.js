import request from './request';

export function getGoodsList(param) {
  const {pageNo, pageSize} = param
  return request({
    url: `/mall/goods/list?pageNo=${pageNo}&pageSize=${pageSize}`
  }) 
}

export function addGoods(data) {
  return request({
    url: '',
    methodL: 'POST'
    data
  }) 
}