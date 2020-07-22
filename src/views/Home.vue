<template>
  <overViewContainer />
</template>

<script>
import overViewContainer from '../components/overViewContainer'

export default {
  name: 'Home',
  components:{
    overViewContainer
  },
  created() {
    this.$emit("btn", "regionale");
  }
}
</script>
