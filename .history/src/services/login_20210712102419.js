import request from './request';

export function register(data) {
  return request({
    url: '/mall/seller/register',
    method: 'POST',
    data
  })
}

export function loginFuc(data) {
  return request({
    url: '/mall/seller/login',
    method: 'POST',
    data
  })
}