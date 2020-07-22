<template>
  <main>
    <h4 class="text">Panoramica regionale del {{ data }}:</h4>
    <div class="table-responsive">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Regione</th>
            <th scope="col">Casi totali</th>
            <th scope="col">Totale positivi</th>
            <th scope="col">Nuovi positivi</th>
            <th scope="col">Ospedalizzati</th>
            <th scope="col">Terapia intensiva</th>
            <th scope="col">Totale dimessi</th>
            <th scope="col">Totale deceduti</th>
            <th scope="col">Totale tamponi</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="regione in datiRegioni" :key="regione.codice">
            <th scope="row">{{ regione.regione }}</th>
            <!--
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.casi" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.totPos" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.newPos" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.ospedale" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.terInt" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.dimessi" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.deceduti" />
            </td>
            <td>
              <Roller :transition="2.5" :isStatic="true" :text="regione.tamponi" />
            </td>
            <td>{{regione.note}}</td>
            -->
            <td>{{ regione.casi }}</td>
            <td>{{ regione.totPos }}</td>
            <td>{{ regione.newPos }}</td>
            <td>{{ regione.ospedale }}</td>
            <td>{{ regione.terInt }}</td>
            <td>{{ regione.dimessi }}</td>
            <td>{{ regione.deceduti }}</td>
            <td>{{ regione.tamponi }}</td>
            <td>{{ regione.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";
//import Roller from "vue-roller";
export default {
  name: "tableContainer",
  data() {
    return {
      datiRegioni: [],
      data: ""
    };
  },
  /*
  components:{
      Roller
  },
  */
  created() {
    this.loadRegions();
  },
  methods: {
    loadRegions() {
      axios({
        url:
          "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
      })
        .then(response => {
          this.data = this.timeConverter(response.data[0].data);
          var regioneTmp = {};
          for (let i = 0; i < response.data.length; i++) {
            regioneTmp = {
              codice: response.data[i].codice_regione,
              regione: response.data[i].denominazione_regione,
              casi: response.data[i].totale_casi,
              totPos: response.data[i].totale_positivi,
              newPos: response.data[i].nuovi_positivi,
              ospedale: response.data[i].totale_ospedalizzati,
              terInt: response.data[i].terapia_intensiva,
              dimessi: response.data[i].dimessi_guariti,
              deceduti: response.data[i].deceduti,
              tamponi: response.data[i].tamponi,
              note: response.data[i].note
            };
            this.datiRegioni.push(regioneTmp);
          }
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