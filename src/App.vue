<template>
  <d-container id="app">
    <header>
      <h1 class="text">
        <unicon name="coronavirus" fill="royalblue" width="1em" height="1em" />Covid19
      </h1>
      <p
        class="text"
      >Dati sull'andamento nazionale del virus Covid19 forniti dal Ministero della Salute.</p>
      <br />
      <div>
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-sm d-flex justify-content-center">
              <router-link to="/">
                <d-button outline>Dati nazionali del giorno</d-button>
              </router-link>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <router-link to="/regionali">
                <d-button outline theme="info">Dati regionali del giorno</d-button>
              </router-link>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <router-link to="/storico">
                <d-button outline theme="success">Storico nazionale</d-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <br />
    <router-view/>
  </d-container>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
@import url("./css/style.css");
</style>
