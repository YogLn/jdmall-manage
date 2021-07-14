<template>
  <div>
    <el-table :data="goodsList"
              border
              style="width: 100%"
              max-height="580px">
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
      <el-table-column prop="image"
                       label="商品图片"
                       width="150">
        <template #default="scope">
          <img :src="scope.row.image"
                width="150px"
                
               alt="">
        </template>
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
      <el-select v-model="auditInfo.state"
                 placeholder="请选择">
        <el-option v-for="item in auditSelectOption"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="auditGoodsAction">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import _ from "lodash";
import { reactive, ref } from "vue";
import { getGoodList, auditGoods } from "../../services/audit";
import { ElMessage } from 'element-plus'
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

    // 审核商品
    let dialogVisible = ref(false)
    const auditInfo = reactive({
      id: '',
      state: ''
    })
    const auditSelectOption = ref([
      {
        value: '1',
        label: '通过'
      },
      {
        value: '2',
        label: '不通过'
      },
    ])
    const showDialog = (id) => {
      dialogVisible.value = true
      auditInfo.id = id
    }
    const auditGoodsAction = () => {
      console.log(auditInfo);
      auditGoods(_.cloneDeep(auditInfo)).then(res => {
        console.log(res);
        if (res.code === 200) {
          ElMessage.success({
            message: '审核成功',
            type: 'success'
          });
          getGoodList(_.cloneDeep(params)).then((res) => {
            goodsList.value = res.data.records;
          }).catch(err => console.log(err));
        } else {
          ElMessage.error('审核失败');
        }
      })
      dialogVisible.value = false
    }
    return {
      goodsList,
      auditGoodsAction,
      auditInfo,

      dialogVisible,
      showDialog,
      auditSelectOption
    };
  },
};
</script>

<style scoped>
</style>