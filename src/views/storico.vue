<template>
  <tableContainer :type="'storico'" />
</template>

<script>
import tableContainer from "../components/tableContainer";

export default {
  name: "storico",
  components: {
    tableContainer
  }
};
</script>
