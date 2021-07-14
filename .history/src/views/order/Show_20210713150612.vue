<template>

</template>

<script>
import { selectOrderBySeller } from '../../services/order';
export default {
  setup () {
    console.log(localStorage.getItem("username"));
    // selectOrderBySeller()
  }
}
</script>

<style>
</style>