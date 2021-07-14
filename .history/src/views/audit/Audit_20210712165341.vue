<template>
  <div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {getGoodList} from '../../services/audit';
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
      state: 0
    })
    getGoodList().then(res => {
      console.log(res);
    })
    return{

    }
  }
}
</script>

<style scoped>
</style>