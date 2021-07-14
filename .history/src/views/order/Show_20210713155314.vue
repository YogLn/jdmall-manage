<template>
  <div class="">
    <el-table :data="orderTable"
              style="width: 100%"
              max-height="450">
      <el-table-column prop="id"
                       label="#"
                       width="150">
      </el-table-column>
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
											 <template #default="scope">
												 <el-tag v-if=scope.row.orderState === true>正常</el-tag>
											 </template>
      </el-table-column>
      <el-table-column prop="user"
                       label="用户"
                       width="150">
      </el-table-column>
      <el-table-column prop="seller"
                       label="卖家"
                       width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import { selectOrderBySeller } from '../../services/order';
export default {
  setup () {
    let orderTable = ref([])
    selectOrderBySeller(localStorage.getItem("username")).then(res => {
      orderTable.value = res.data.records
    })

    return {
      orderTable
    }
  }
}
</script>

<style>
</style>