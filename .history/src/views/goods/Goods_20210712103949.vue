<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <i class="el-icon-lx-cascades"></i> 商品管理
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import {ref, reactive} from 'vue';
import _ from 'lodash';
import { getGoodsList } from "../../services/goods";
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10
    })
    let goodList = ref([])
    getGoodsList(_.cloneDeep(params)).then(res => {
      console.log(res);
      goodList = res.data.records
    })

    return {
      goodList
    }
  }
};
</script>

<style>
</style>