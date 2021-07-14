<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <i class="el-icon-lx-cascades"></i> 商品管理
    </el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-table :data="goodList" border style="width: 100%">
      <el-table-column type="index" label="#" width="50">
      </el-table-column>
      <el-table-column type="seller" label="商家" width="150">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="150">
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="150">
      </el-table-column>
      <el-table-column prop="date" label="商品图片" width="150">
      </el-table-column>
      <el-table-column prop="saleCount" label="总量" width="150">
      </el-table-column>
      <el-table-column prop="auditState" label="商品状态" width="150">
      </el-table-column>
      <el-table-column prop="available" label="是否上架" width="150">
        <template #default="scope">
          <el-tag v-if="scope.row.available == 'true'" type="success">上架</el-tag>
          <el-tag v-else type="info">未上架</el-tag>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" size="small">修改</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
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
      goodList.value = res.data.records;
    });

    return {
      goodList,
    };
  },
};
</script>

<style>
</style>