<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">欢迎注册商家</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="80px" class="ms-content">
        <el-form-item prop="account" label="账户">
          <el-input type="text" v-model="param.account" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="param.password" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input type="text" v-model="param.phone" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>
        <el-form-item prop="shopAddress" label="商铺地址">
          <el-input type="text" v-model="param.shopAddress" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>
        <el-form-item prop="shopName" label="商店名称">
          <el-input type="text" v-model="param.shopName" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>
        <el-form-item prop="username" label="用户名">
          <el-input type="text" v-model="param.username" @keyup.enter="submitForm()">
          </el-input>
        </el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">注册成为商家</el-button>
          <el-button @click="$router.replace('/login')">返回登录界面</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import _ from 'lodash'
import { register } from '../../services/login'

export default {
  setup() {
    const router = useRouter()
    const param = reactive({
      account: '',
      password: '',
      phone: '',
      shopAddress: '',
      shopName: '',
      username: '',
    })

    const rules = {
      account: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
      phone: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
      shopAddress: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
      shopName: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
      username: [
        { required: true, message: '必填信息不得为空~', trigger: 'blur' },
      ],
    }
    const login = ref(null)
    const submitForm = () => {
      login.value.validate((valid) => {
        if (valid) {
          console.log(_.cloneDeep(param))
          register(_.cloneDeep(param))
            .then((res) => {
              console.log(res)
              if (res === 200) {
                ElMessage.success('注册成功')
                localStorage.setItem('username', param.username)
                router.push('/dashboard')
              } else {
                throw new Error()
              }
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          ElMessage.error('注册失败')
          return false               
        }
      })
    }

    const store = useStore()
    store.commit('clearTags')

    return {
      param,
      rules,
      login,
      submitForm,
    }
  },
}
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  /* background-image: url(../../assets/img/login-bg.jpg); */
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #000;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-20%, -20%);
  width: 480px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: #ddd;
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>