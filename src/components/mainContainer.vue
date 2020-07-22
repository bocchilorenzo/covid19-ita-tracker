<template>
  <main>
    <h4 class="text">Panoramica del {{datiMain.data}}:</h4>
    <cardOverviewContainer :datiMain="datiMain" />
    <br />
    <h6 class="text">Altri dati:</h6>
    <listOther :datiMain="datiMain" />
    <br />
    <h4 class="text">Dati regionali:</h4>
    <!--INSERIRE REGIONI-->
  </main>
</template>

<script>
import axios from "axios";
import cardOverviewContainer from "./cardOverviewContainer";
import listOther from "./otherOverviewList";
export default {
  name: "mainContainer",
  components: {
    cardOverviewContainer,
    listOther
  },
  data() {
    return {
      datiMain: {
        data: "",
        totali: "0",
        nuoviPos: "0",
        dimessi: "0",
        deceduti: "0",
        tamponi: "0",
        terapiaIntensiva: "0",
        totPos: "0",
        testati: "0",
        ricSintomi: "0",
        totOspedalizzati: "0",
        domicilio: "0"
      }
    };
  },
  created() {
    this.mainOverview();
  },
  methods: {
    mainOverview() {
      axios({
        url:
          "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"
      })
        .then(response => {
          this.datiMain.data = this.timeConverter(response.data[0].data);
          this.datiMain.totali = response.data[0].totale_casi.toString();
          this.datiMain.nuoviPos = response.data[0].nuovi_positivi.toString();
          this.datiMain.dimessi = response.data[0].dimessi_guariti.toString();
          this.datiMain.deceduti = response.data[0].deceduti.toString();
          this.datiMain.tamponi = response.data[0].tamponi.toString();
          this.datiMain.terapiaIntensiva = response.data[0].terapia_intensiva.toString();
          this.datiMain.totPos = response.data[0].totale_positivi.toString();
          this.datiMain.testati = response.data[0].casi_testati.toString();
          this.datiMain.ricSintomi = response.data[0].ricoverati_con_sintomi.toString();
          this.datiMain.totOspedalizzati = response.data[0].totale_ospedalizzati.toString();
          this.datiMain.domicilio = response.data[0].isolamento_domiciliare.toString();
        })
        .catch(error => console.log(error));
    },
    timeConverter(tmp) {
      var a = new Date(tmp);
      var year = a.getFullYear();
      var month = a.getMonth() < 10 ? "0" + a.getMonth() : a.getMonth();
      var date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
      var time = date + "-" + month + "-" + year;
      return time;
    }
  }
};
</script>