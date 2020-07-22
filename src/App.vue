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
    <router-link v-if="nazionali" to="/">
      <d-button outline>Visualizza dati nazionali</d-button>
    </router-link>
    <router-link v-else to="/regionali">
      <d-button outline theme="info">Visualizza dati regionali</d-button>
    </router-link>
    <br />
    <br />
    <router-view v-on:btn="cambiaBtn" />
  </d-container>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      nazionali: false
    };
  },
  methods: {
    cambiaBtn(type) {
      if (type == "regionale") {
        this.nazionali = false;
      } else {
        this.nazionali = true;
      }
    }
  }
};
</script>

<style>
@import url("./css/style.css");
</style>
