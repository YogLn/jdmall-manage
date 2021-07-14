<template>
  <div>
  </div>
</template>

<script>
import _ from 'lodash';
import { reactive } from 'vue';
import {getGoodList} from '../../services/audit';
export default {
  setup() {
    const params = reactive({
      pageNo: 1,
      pageSize: 10,
      state: 0
    })
    getGoodList(_.cloneDeep(params)).then(res => {
      console.log(res);
    })
    return{

    }
  }
}
</script>

<style scoped>
</style>