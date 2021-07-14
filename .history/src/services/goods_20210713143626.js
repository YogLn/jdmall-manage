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

export function addGoods(data,formdata) {
  for(const key in data){
    formdata.append(key,data[key])
  }
  return request({
    url: `/mall/seller/releaseGoods`,
    method: 'POST',
    data: formdata
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

export function updataGoodsInfo(data, formdata) {
  if(formdata) {
    for(const key in data){
      formdata.append(key,data[key])
    }
    return request({
      url: `/mall/goods/updateGoodsById`,
      method: 'post',
      data: formdata
    })
  } else {
    console.log(data);
    data["image"] = ''
    return request({
      url: `/mall/goods/updateGoodsById`,
      method: 'post',
      data
    })
  }   
}
