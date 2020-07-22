<template>
  <tableContainer />
</template>

<script>
import tableContainer from "../components/tableContainer";

export default {
  name: "regionali",
  components: {
    tableContainer
  },
  created() {
    this.$emit("btn", "nazionale");
  }
};
</script>
