<template>
  <tableContainer :type="'regioni'" />
</template>

<script>
import tableContainer from "../components/tableContainer.vue";

export default {
  name: "regionali",
  components: {
    tableContainer
  }
};
</script>
