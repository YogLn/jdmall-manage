<template>

</template>

<script>
import { ref } from 'vue';
import { getUserOrderByUserName } from '../../services/order';
export default {
  setup () {
    const userOrderList = ref([])
    getUserOrderByUserName('cqst').then(res => {
      console.log(res);
			userOrderList.value = records
    })

    return {
      getUserOrderByUserName
    }
  }

}
</script>

<style>
</style>