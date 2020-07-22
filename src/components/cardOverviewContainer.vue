<template>
  <d-row id="mainData">
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <d-card-body title="Casi totali">
          <Roller class="centrata" :transition="2" :text="datiMain.totali" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <d-card-body title="Nuovi positivi">
          <Roller class="centrata" :transition="2" :text="datiMain.nuoviPos" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol" cols="12" md="4">
      <d-card>
        <d-card-body title="Totale dimessi">
          <Roller class="centrata" :transition="2" :text="datiMain.dimessi" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <d-card-body title="Totale deceduti">
          <Roller class="centrata" :transition="2" :text="datiMain.deceduti" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <d-card-body title="Totale tamponi">
          <Roller class="centrata" :transition="2" :text="datiMain.tamponi" />
        </d-card-body>
      </d-card>
    </d-col>
    <d-col class="mainCol second" cols="12" md="4">
      <d-card>
        <d-card-body title="Terapia intensiva">
          <Roller class="centrata" :transition="2" :text="datiMain.terapiaIntensiva" />
        </d-card-body>
      </d-card>
    </d-col>
  </d-row>
</template>

<script>
import Roller from "vue-roller";
export default {
  name: "cardOverviewContainer",
  props: {
    datiMain: Object
  },
  components:{
      Roller
  }
};
</script>