import request from "./request";

export function getGoodList(param) {
  const { pageNo, pageSize, state } = param;
  return request({
    url: `/mall/admin/audit?pageNo=${pageNo}&pageSize=${pageSize}&state=${state}`,
  });
}

export function getGoodsInfo(id) {
  return request({
    url: `/mall/admin/audit}`,
  });
}
