<template>
  <tableContainer :type="'storico'" />
</template>

<script>
import tableContainer from "../components/tableContainer";

export default {
  name: "storico",
  title() {
    return `${this.pageTitle}`;
  },
  data(){
    return{
      pageTitle: "Dati storici"
    }
  },
  components: {
    tableContainer
  }
};
</script>
