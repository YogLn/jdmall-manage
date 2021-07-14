<template>
  <div>
    <el-table :data="goodsList" border style="width: 100%">
      <el-table-column type="id" label="#" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from "lodash";
import { reactive, ref } from "vue";
import { getGoodList } from "../../services/audit";
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
      state: 0,
    });
    const goodsList = ref([])
    getGoodList(_.cloneDeep(params)).then((res) => {
      console.log(res);
      goodsList = res.data.records
    });
    return {
      goodsList

    };
  },
};
</script>

<style scoped>
</style>