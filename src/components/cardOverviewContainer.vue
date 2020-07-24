<template>
  <d-row id="mainData">
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <unicon name="users-alt" fill="royalblue" class="iconaCard" width="2.5em" height="2.5em" />
        <d-card-body title="Casi totali">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.totali" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <unicon name="chart-line" fill="royalblue" class="iconaCard" width="2.5em" height="2.5em" />
        <d-card-body title="Nuovi positivi">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.nuoviPos" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <unicon name="home-alt" fill="royalblue" class="iconaCard" width="2.5em" height="2.5em" />
        <d-card-body title="Totale dimessi">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.dimessi" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <unicon name="sad-dizzy" fill="royalblue" class="iconaCard" width="2.5em" height="2.5em" />
        <d-card-body title="Totale deceduti">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.deceduti" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <unicon
          name="prescription-bottle"
          fill="royalblue"
          class="iconaCard"
          width="2.5em"
          height="2.5em"
        />
        <d-card-body title="Totale tamponi">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.tamponi" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <unicon
          name="medical-drip"
          fill="royalblue"
          class="iconaCard"
          width="2.5em"
          height="2.5em"
        />
        <d-card-body title="Terapia intensiva">
          <Roller class="centrata" :transition="transitionTime" :text="datiMain.terapiaIntensiva" />
        </d-card-body>
      </d-card>
    </d-col>
  </d-row>
</template>

<script>
import Roller from "vue-roller";
export default {
  name: "cardOverviewContainer",
  data() {
    return {
      transitionTime: 1.5
    };
  },
  props: {
    datiMain: Object
  },
  components: {
    Roller
  }
};
</script>

<style scoped>
.card-body {
  font-size: 1.5em;
  padding-top: 1rem;
}

.centrata {
  margin: 0 auto;
}

.iconaCard{
  padding-top: 1rem;
}
</style>