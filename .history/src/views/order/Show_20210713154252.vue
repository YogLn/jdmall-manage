<template>
  <div class="">
    <el-table :data="orderTable"
              style="width: 100%"
              max-height="250">
      <el-table-column fixed
                       prop="date"
                       label="日期"
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
      console.log(res);
			order.ta
    })
  }
}
</script>

<style>
</style>