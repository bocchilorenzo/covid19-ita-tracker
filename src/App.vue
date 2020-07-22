<template>
  <d-container id="app">
    <header>
      <h1 class="text">
        <unicon name="coronavirus" fill="royalblue" width="1em" height="1em" />Covid19
      </h1>
      <p
        class="text"
      >Dati sull'andamento nazionale del virus Covid19 forniti dal Ministero della Salute.</p>
    </header>

    <mainContainer />
  </d-container>
</template>
<script>
import mainContainer from './components/mainContainer'
export default {
  name: "App",
  components:{
    mainContainer
  }
};
</script>

<style>
@import url("./css/style.css");
</style>
