<template>

</template>

<script>
import { getUserOrderByUserName } from '../../services/order';
export default {
  setup () {
    getUserOrderByUserName(cqst).then(rs => {
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