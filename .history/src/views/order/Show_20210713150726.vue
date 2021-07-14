<template>

</template>

<script>
import { selectOrderBySeller } from '../../services/order';
export default {
  setup () {
    selectOrderBySeller(localStorage.getItem("username")).then(res => {
      console.log(res);
    })
  }
}
</script>

<style>
</style>