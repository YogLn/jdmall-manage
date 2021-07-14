<template>
  <div>
    
    <el-card>
      <el-table :data="goodList" border style="width: 100%">
        <el-table-column type="index" label="#" width="50"> </el-table-column>
        <el-table-column type="seller" label="商家" width="150">
          <template #default="scope">
            {{ scope.row.seller }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="150">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="150">
        </el-table-column>
        <el-table-column prop="saleCount" label="总量" width="150">
        </el-table-column>
        <el-table-column prop="auditState" label="商品状态" width="150">
        </el-table-column>
        <el-table-column prop="available" label="是否上架" width="150">
          <template #default="scope">
            <el-tag v-if="scope.row.available == true" type="success"
              >上架</el-tag
            >
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

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pageNo"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
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
    let total = ref();
    getGoodsList(_.cloneDeep(params)).then((res) => {
      console.log(res);
      total.value = res.data.total;
      goodList.value = res.data.records;
    });

    // 分页
    const handleSizeChange = (newSize) => {
      params.pageSize = newSize;
      console.log(_.cloneDeep(params));
      getGoodsList(_.cloneDeep(params)).then((res) => {
        console.log(res);
        goodList.value = res.data.records;
      });
    };

    const handleCurrentChange = (newPage) => {
      params.pageNo = newPage;
      getGoodsList(_.cloneDeep(params)).then((res) => {
        console.log(res);
        goodList.value = res.data.records;
      });
    };

    return {
      goodList,
      params,
      handleSizeChange,
      handleCurrentChange,
      total,
    };
  },
};
</script>

<style scoped>

</style>