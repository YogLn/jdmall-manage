<template>
  <div class="">
    <el-table :data="orderTable"
              style="width: 100%"
              max-height="450">
      <el-table-column prop="id"
                       label="订单号"
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
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import _ from 'lodash';
import { cancelOrderById, selectOrderBySeller, delOrderById } from '../../services/order'
export default {
  setup () {
    let orderTable = ref([])
    orderTable.value = {
      pageNo: 1,
      pageSize: 10,
      seller: localStorage.getItem("username")
    }
    selectOrderBySeller(_.cloneDeep(orderTable.value)).then(res => {
      console.log(res);
      orderTable.value = res.data.records
    })

    // 删除订单
    const delOrder = (id) => {
      ElMessageBox.confirm('删除此订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          const data = [
            {
              "id": id
            }
          ]
          delOrderById(data).then(res => {
            if (res.code === 200) {
              selectOrderBySeller(localStorage.getItem("username")).then(res => {
                orderTable.value = res.data.records
              })
              ElMessage.success({
                message: '删除成功',
                type: 'success'
              });
            } else {
              ElMessage.error('删除失败')
            }
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除',
          });
        });
    }

    // 取消订单
    const canOrder = (id) => {
      const data = [
        {
          "id": id,
          "orderState": false
        }
      ]
      ElMessageBox.confirm('取消该用户的订单？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          cancelOrderById(data).then(res => {
            if (res.code === 200) {
              ElMessage.success({
                message: '取消成功',
                type: 'success'
              });
              selectOrderBySeller(localStorage.getItem("username")).then(res => {
                orderTable.value = res.data.records
              })
            } else {
              ElMessage.error('取消失败')
            }
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除',
          });
        });
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