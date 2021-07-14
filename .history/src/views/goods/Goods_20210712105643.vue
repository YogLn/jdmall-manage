<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <i class="el-icon-lx-cascades"></i> 商品管理
    </el-breadcrumb-item>
  </el-breadcrumb>
  {{goodList.length}}
  <el-card>
    <el-table :data="goodList" border style="width: 100%">
      <el-table-column fixed type="index" label="#" width="150">
      </el-table-column>
      <el-table-column fixed type="seller" label="商家" width="150">
      </el-table-column>
      <el-table-column fixed prop="name" label="商品名称" width="150">
      </el-table-column>
      <el-table-column fixed prop="price" label="商品价格" width="150">
      </el-table-column>
      <el-table-column fixed prop="date" label="商品图片" width="150">
      </el-table-column>
      <el-table-column fixed prop="saleCount" label="总量" width="150">
      </el-table-column>
      <el-table-column fixed prop="auditState" label="商品状态" width="150">
      </el-table-column>
      <el-table-column fixed prop="available" label="是否上架" width="150">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { ref, reactive } from "vue";
import _ from "lodash";
import { getGoodsList } from "../../services/goods";
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
    });
    let goodList = ref([]);
    getGoodsList(_.cloneDeep(params)).then((res) => {
      console.log(res);
      goodList.vaue = res.data.records;
    });

    return {
      goodList,
    };
  },
};
</script>

<style>
</style>