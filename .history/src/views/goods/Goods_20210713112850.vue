<template>
  <div>
    <el-button type="primary"
               @click="dialogVisible = true">添 加 商 品</el-button>
    <el-card>
      <el-table :data="goodList"
                border
                style="width: 100%"
                max-height="450px">
        <el-table-column type="index"
                         label="#"
                         width="50"> </el-table-column>
        <el-table-column type="seller"
                         label="商家"
                         width="150">
          <template #default="scope">
            {{ scope.row.seller }}
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商品名称"
                         width="150">
        </el-table-column>
        <el-table-column prop="price"
                         label="商品价格"
                         width="150">
        </el-table-column>
        <el-table-column prop="saleCount"
                         label="总量"
                         width="150">
        </el-table-column>
        <el-table-column prop="auditState"
                         label="商品状态"
                         width="150">
          <template #default="scope">
            <el-tag v-if="scope.row.auditState === 0"
                    type="info">待审核</el-tag>
            <el-tag v-else-if="scope.row.auditState === 1"
                    type="success">通过</el-tag>
            <el-tag v-else
                    type="danger">不通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="available"
                         label="是否上架"
                         width="150">
          <template #default="scope">
            <el-tag v-if="scope.row.available == true"
                    type="success">上架</el-tag>
            <el-tag v-else
                    type="info">未上架</el-tag>
          </template>
        </el-table-column>

        <el-table-column fixed="right"
                         label="操作"
                         width="180">
          <template #default="scope">
            <el-button type="primary"
                       size="small"
                       @click="editGoodsInfo(scope.row.id)">修改</el-button>
            <el-popconfirm confirmButtonText="确认删除"
                           cancelButtonText="不用了"
                           icon="el-icon-info"
                           iconColor="red"
                           title="警告"
                           @confirm="confirmDelete(scope.row.id)">
              <template #reference>
                <el-button type="danger"
                           size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="params.pageNo"
                   :page-sizes="[5, 10, 15, 20]"
                   :page-size="params.pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total">
    </el-pagination>

    <!-- 添加对话框 -->
    <el-dialog title="添加商品信息"
               v-model="dialogVisible"
               width="40%">
      <el-form :model="addForm">
        <el-form-item label="商品名称"
                      label-width="80px">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格"
                      label-width="80px">
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品图片"
                      label-width="80px">
          <input type="file"
                 @change="uploadChange">
        </el-form-item>
        <el-form-item label="商家名称"
                      label-width="80px">
          <el-input v-model="addForm.seller"></el-input>
        </el-form-item>
        <el-form-item label="商品总数"
                      label-width="80px">
          <el-input v-model="addForm.saleCount"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="addGoodsInfo">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 修改对话框 -->
    <el-dialog title="提示"
               v-model="editDialogVisible"
               width="30%">
      <el-form :model="editForm">
        <el-form-item label="商家名称"
                      label-width="80px">
          <el-input v-model="editForm.seller"></el-input>
        </el-form-item>
        <el-form-item label="商品名称"
                      label-width="80px">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格"
                      label-width="80px">
          <el-input v-model="editForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品图片"
                      label-width="80px">
          <el-input v-model="editForm.image"></el-input>
        </el-form-item>
        <el-form-item label="商品总数"
                      label-width="80px">
          <el-input v-model="editForm.saleCount"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="editGoodsInfoAction">修 改</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import _ from "lodash";
import { ElMessage } from "element-plus";
import { getGoodsList, addGoods, deleteGoods, getGoodsInfoById, updataGoodsInfo } from "../../services/goods";
export default {
  data
  setup () {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
    });
    let goodList = ref([]);
    let total = ref();
    getGoodsList(_.cloneDeep(params)).then((res) => {
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
        goodList.value = res.data.records;
      });
    };

    // 对话框
    let dialogVisible = ref(false);
    let addForm = reactive({
      image: "",
      name: "",
      price: 0,
      saleCount: 0,
      seller: "",
    });
    const addGoodsInfo = () => {
      console.log(_.cloneDeep(addForm));
      addGoods(_.cloneDeep(addForm)).then((res) => {
        console.log(res);
      });
      dialogVisible = false
    };
    const uploadChange = (e) => {
      console.log(e.target);
      console.log(e.target.file);
    }

    // 修改
    let editDialogVisible = ref(false)
    const editForm = reactive({
      id: '',
      image: '',
      name: '',
      price: '',
      saleCount: '',
      seller: ''
    })
    const editGoodsInfo = (id) => {
      editForm.id = id
      getGoodsInfoById(id).then(res => {
        editForm.name = res.data.name
        editForm.price = res.data.price
        editForm.saleCount = res.data.saleCount
        editForm.image = res.data.image
        editForm.seller = res.data.seller
      })
      editDialogVisible.value = true
    }
    const editGoodsInfoAction = () => {
      updataGoodsInfo(_.cloneDeep(editForm)).then(res => {
        if (res.code == 200) {
          ElMessage.success('修改成功')
        } else {
          ElMessage.error('修改失败')
        }
        getGoodsList(_.cloneDeep(params)).then((res) => {
          total.value = res.data.total;
          goodList.value = res.data.records;
        });
        editDialogVisible.value = false
      })
    }

    // 删除
    const confirmDelete = (id) => {
      deleteGoods(id).then((res) => {
        if (res.code == 200) {
          ElMessage.success("删除成功");
          getGoodsList(_.cloneDeep(params)).then((res) => {
            goodList.value = res.data.records;
          });
        } else {
          ElMessage.success("删除失败");
        }
      });
    };
    return {
      goodList,
      params,
      handleSizeChange,
      handleCurrentChange,
      total,
      dialogVisible,

      // 添加
      addForm,
      addGoodsInfo,

      // 修改
      editGoodsInfo,
      editForm,
      editDialogVisible,
      editGoodsInfoAction,
      // 删除
      confirmDelete,
      uploadChange
    };
  },
};
</script>

<style scoped>
</style>