<template>
  <div>
    <el-table :data="goodsList"
              border
              style="width: 100%"
              max-height="480px">
      <el-table-column prop="id"
                       label="#"
                       width="150"> </el-table-column>
      <el-table-column prop="name"
                       label="商品名称"
                       width="200">
      </el-table-column>
      <el-table-column prop="price"
                       label="商品价格（元）"
                       width="150">
      </el-table-column>
      <el-table-column prop="saleCount"
                       label="商品总数"
                       width="120">
      </el-table-column>
      <el-table-column prop="seller"
                       label="卖家"
                       width="280">
      </el-table-column>
      <el-table-column prop="auditState"
                       label="卖家"
                       width="280">
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="info"
                     @click="showInfo(scope.row.id)"
                     size="small">查看</el-button>
          <el-button type="warning"
                     size="small">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from "lodash";
import { reactive, ref } from "vue";
import { getGoodList, getGoodsInfo } from "../../services/audit";
export default {
  setup () {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
      state: 0,
    });
    const goodsList = ref([]);
    getGoodList(_.cloneDeep(params)).then((res) => {
      console.log(res);
      goodsList.value = res.data.records;
    }).catch(err => console.log(err));

    const showInfo = (id) => {
      getGoodsInfo(id).then(res => {
        console.log(res);
      })
    }
    return {
      goodsList,
      showInfo
    };
  },
};
</script>

<style scoped>
</style>