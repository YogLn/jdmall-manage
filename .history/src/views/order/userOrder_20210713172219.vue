<template>

</template>

<script>
import { getUserOrderByUserName } from '../../services/order';
export default {
  setup () {
		getUserOrderByUserName()

		return {
			getUserOrderByUserName
		}
  }

}
</script>

<style>
</style>