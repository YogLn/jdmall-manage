<template>
  <div class="">
    <el-table :data="orderTable"
              style="width: 100%"
              max-height="450">
      <el-table-column prop="id"
                       label="#"
                       width="150">
        <el-table-column prop="goodsId"
                         label="商品名称"
                         width="150">
        </el-table-column>
        <el-table-column prop="goodsId"
                         label="商品价格"
                         width="150">
        </el-table-column>
        <el-table-column prop="orderState"
                         label="订单状态"
                         width="150">
        </el-table-column>
        <el-table-column prop="user"
                         label="用户"
                         width="150">
        </el-table-column>
        <el-table-column prop="goodsId"
                         label="卖家"
                         width="150">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { selectOrderBySeller } from '../../services/order';
export default {
  setup () {
    selectOrderBySeller(localStorage.getItem("username")).then(res => {
      orderTable = res.data.records
    })
  }
}
</script>

<style>
</style>