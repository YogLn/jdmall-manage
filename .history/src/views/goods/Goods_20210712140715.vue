<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true"
      >添 加 商 品</el-button
    >
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

    <!-- 对话框 -->
    <el-dialog title="添加商品信息" v-model="dialogVisible" width="40%">
      <template #footer>
        <el-form ref="addForm" :model="addForm" label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="addForm.price"></el-input>
          </el-form-item>
          <el-form-item label="活动名称">
            <el-input v-model="addForm.image"></el-input>
          </el-form-item>
          <el-form-item label="商店名称">
            <el-input v-model="addForm.seller"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-input v-model="addForm.saleCount"></el-input>
          </el-form-item>
        </el-form>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addGoodsInfo">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import _ from "lodash";
import { getGoodsList, addGoods } from "../../services/goods";
export default {
  setup() {
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
        console.log(res);
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
      // addGoods(_.cloneDeep(addForm)).then((res) => {
      //   console.log(res);
      // });
      // dialogVisible = false
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
    };
  },
};
</script>

<style scoped>
</style>