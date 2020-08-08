<template>
  <tableContainer :type="'storico'" />
</template>

<script>
import tableContainer from "../components/tableContainer.vue";

export default {
  name: "storico",
  components: {
    tableContainer
  }
};
</script>
