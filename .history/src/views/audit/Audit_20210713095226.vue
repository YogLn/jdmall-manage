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
                       width="180">
      </el-table-column>
      <el-table-column prop="available"
                       label="是否上架"
                       width="100">
        <template #default="scope">
          <el-tag v-if="scope.row.available === true"
                  type="success">上架</el-tag>
          <el-tag v-else
                  type="info">下架</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="auditState"
                       label="审核状态"
                       width="100">
        <template #default="scope">
          <el-tag v-if="scope.row.auditState === 0"
                  type="warning">待审核</el-tag>
          <el-tag v-else
                  type="info">已审核</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="warning"
                     @click="showDialog(scope.row.id)"
                     size="small">审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核商品对话框 -->
    <el-dialog title="审核商品"
               v-model="dialogVisible"
               width="30%">
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
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
      goodsList.value = res.data.records;
    }).catch(err => console.log(err));

    // 审核商品
    let dialogVisible = ref(false)
    const auditInfo = reactive({
      id: '',
      state: ''
    })
    const showDialog = (id) => {
      dialogVisible.value = true
      console.log(id);
    }
    const auditGoodsAction = (id) => {

    }
    return {
      goodsList,
      auditGoodsAction,
      auditInfo,

      dialogVisible,
      showDialog
    };
  },
};
</script>

<style scoped>
</style>