<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="inputUserName"
                  placeholder="请输入要查询的用户名"
                  maxlength="60"></el-input>
      </el-col>
      <el-col :span="8">
        <el-button type="primary"
                   @click="getUserOrderList">查询用户订单</el-button>
      </el-col>
    </el-row>

    <el-table :data="userOrderList"
              style="width: 100%"
              max-height="480px">
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
  </el-card>
</template>

<script>
import { ref } from 'vue';
import { getUserOrderByUserName, cancelOrderById, delOrderById } from '../../services/order';
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup () {

    const inputUserName = ref()

    const userOrderList = ref([])
    const getUserOrderList = () => {
      getUserOrderByUserName(inputUserName.value, localStorage.getItem("username")).then(res => {
        if (res.code === 200) {
          if (res.data.records.length === 0) {
            return ElMessage.error('没有该用户的订单信息')
          }
          ElMessage.success('查询成功')
          userOrderList.value = res.data.records
        } else {
          ElMessage.error('查询失败')
        }
      })
    }

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
              ElMessage.success({
                message: '删除成功',
                type: 'success'
              });
              getUserOrderByUserName(inputUserName.value).then(res => {
                userOrderList.value = res.data.records
              })
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
              getUserOrderByUserName(inputUserName.value).then(res => {
                userOrderList.value = res.data.records
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
      getUserOrderByUserName,
      userOrderList,
      delOrder,
      canOrder,
      inputUserName,
      getUserOrderList
    }
  }

}
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
</style>