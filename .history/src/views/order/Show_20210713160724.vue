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
          <el-tag type="sucess"
                  v-if="scope.row.orderState === true">正常</el-tag>
          <el-tag type="info"
                  v-else>已取消</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="orderState"
                       label="支付状态"
                       width="150">
        <template #default="scope">
          <el-tag type="sucess"
                  v-if="scope.row.payState === true">支付</el-tag>
          <el-tag type="info"
                  v-else>未支付</el-tag>
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

      <el-table-column fixed="right"
                       label="操作"
                       width="200">
        <template #default="scope">
          <el-button @click="delOrder(scope.row.id)"
                     type="danger"
                     size="small">删除订单</el-button>
          <el-button type="warning"
                     size="small"
										 @click="canOrder(scope.row.id)">取消订单</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import { cancelOrderById } from '../../services/order';
import { selectOrderBySeller } from '../../services/order';
export default {
  setup () {
    let orderTable = ref([])
    selectOrderBySeller(localStorage.getItem("username")).then(res => {
      console.log(res);
      orderTable.value = res.data.records
    })

    // 删除订单
    const delOrder = (id) => {

    }

		// 取消订单
		 const canOrder = (id) => {
			 const
			 cancelOrderById()
		 }

    return {
      orderTable,
      delOrder,
			canOrder
    }
  }
}
</script>

<style>
</style>