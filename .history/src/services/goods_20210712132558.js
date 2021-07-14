import request from './request';

export function getGoodsList(param) {
  const {pageNo, pageSize} = param
  console.log(`/mall/goods/list?pageNo=${pageNo}&pageSize=${pageSize}`);
  return request({
    url: `/mall/goods/list?pageNo=${pageNo}&pageSize=${pageSize}`
  }) 
}