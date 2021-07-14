<template>

</template>

<script>
import { getUserOrderByUserName } from '../../services/order';
export default {
  setup () {
    getUserOrderByUserName('cqst').then(res => {
      console.log(res);
    })

    return {
      getUserOrderByUserName
    }
  }

}
</script>

<style>
</style>