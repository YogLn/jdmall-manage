<template>
  <template>
    <el-table :data="userOrderList"
              style="width: 100%"
              :row-class-name="tableRowClassName">
      <el-table-column prop="id"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
  </template>
</template>

<script>
import { ref } from 'vue';
import { getUserOrderByUserName } from '../../services/order';
export default {
  setup () {
    const userOrderList = ref([])
    getUserOrderByUserName('cqst').then(res => {
      userOrderList.value = res.data.records
    })

    return {
      getUserOrderByUserName,
			userOrderList
    }
  }

}
</script>

<style>
</style>