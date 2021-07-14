import request from './request';

export function getGoodsList(param) {
  const {pageNo, pageSize} = param
  return request({
    url: `/mall/goods/list?pageNo=${pageNo}&pageSize=${pageSize}`
  }) 
}

export function getGoodsInfoById(id) {
  return request({
    url: `/mall/goods/getGoodsById`,
    params: {
      id
    }
  })
}

export function addGoods(data) {
  return request({
    url: '​/mall​/seller​/releaseGoods',
    method: 'POST',
    data,

  }) 
}

export function deleteGoods(id) {
  return request({
    url: `/mall/goods/deleteGoodsById`,
    method: 'delete',
    data: {
      id
    }
  }) 
}

export function updataGoodsInfo(data) {
  return request({
    url: `/mall/goods/updateGoodsById`,
    method: 'post',
    data
  }) 
}
