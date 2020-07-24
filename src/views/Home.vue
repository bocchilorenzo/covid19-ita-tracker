<template>
  <overViewContainer />
</template>

<script>
import overViewContainer from '../components/overViewContainer'

export default {
  name: 'Home',
  title() {
    return `${this.pageTitle}`;
  },
  data(){
    return{
      pageTitle: "Ultimi dati nazionali"
    }
  },
  components:{
    overViewContainer
  }
}
</script>
