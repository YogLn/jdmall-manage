<template>
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
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
      console.log(res);
      userOrderList.value = res.data.records
    })

    return {
      getUserOrderByUserName
    }
  }

}
</script>

<style>
</style>