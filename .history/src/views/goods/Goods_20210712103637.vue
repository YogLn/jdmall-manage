<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <i class="el-icon-lx-cascades"></i> 商品管理
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import {ref, reactive} from 'vue';
import { getGoodsList } from "../../services/goods";
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10
    })
    getGoodsList().then(res => {
      console.log(res);
    })

    return {

    }
  }
};
</script>

<style>
</style>