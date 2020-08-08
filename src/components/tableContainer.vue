<template>
  <main>
    <h4 v-if="type == 'regioni'" class="text">Panoramica regionale del {{ data }}:</h4>
    <h4 v-else class="text">Storico nazionale</h4>
    <div class="table-responsive tableWrap">
      <table class="table table-striped table-bordered table-dark table-sm">
        <thead>
          <tr>
            <th scope="col" v-if="type == 'regioni'" @click="sort('regione')">
              <unicon name="compass" fill="royalblue" />
              <br />
              <p>Regione</p>
              <p v-if="currentSort == 'regione'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" v-else @click="sort('data')">
              <unicon name="calendar-alt" fill="royalblue" />
              <br />
              <p>Data</p>
              <p v-if="currentSort == 'data'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('casi')">
              <unicon name="users-alt" fill="royalblue" />
              <br />
              <p>Casi totali</p>
              <p v-if="currentSort == 'casi'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('totPos')">
              <unicon name="user-plus" fill="royalblue" />
              <br />
              <p>Totale positivi</p>
              <p v-if="currentSort == 'totPos'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('newPos')">
              <unicon name="chart-line" fill="royalblue" />
              <br />
              <p>Nuovi positivi</p>
              <p v-if="currentSort == 'newPos'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('ospedale')">
              <unicon name="hospital" fill="royalblue" />
              <br />
              <p>Ospedalizzati</p>
              <p v-if="currentSort == 'ospedale'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('terInt')">
              <unicon name="medical-drip" fill="royalblue" />
              <br />
              <p>Terapia intensiva</p>
              <p v-if="currentSort == 'terInt'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('dimessi')">
              <unicon name="home-alt" fill="royalblue" />
              <br />
              <p>Totale dimessi</p>
              <p v-if="currentSort == 'dimessi'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('deceduti')">
              <unicon name="sad-dizzy" fill="royalblue" />
              <br />
              <p>Totale deceduti</p>
              <p v-if="currentSort == 'deceduti'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('tamponi')">
              <unicon name="prescription-bottle" fill="royalblue" />
              <br />
              <p>Totale tamponi</p>
              <p v-if="currentSort == 'tamponi'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" v-if="type == 'storico'" @click="sort('ricSintomi')">
              <unicon name="head-side-cough" fill="royalblue" />
              <br />
              <p>Ricoverati con sintomi</p>
              <p v-if="currentSort == 'ricSintomi'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" v-if="type == 'storico'" @click="sort('domicilio')">
              <unicon name="house-user" fill="royalblue" />
              <br />
              <p>Isolamento domiciliare</p>
              <p v-if="currentSort == 'domicilio'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" v-if="type == 'storico'" @click="sort('testati')">
              <unicon name="microscope" fill="royalblue" />
              <br />
              <p>Casi testati</p>
              <p v-if="currentSort == 'testati'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
            <th scope="col" @click="sort('note')">
              <unicon name="envelope-alt" fill="royalblue" />
              <br />
              <p>Note</p>
              <p v-if="currentSort == 'note'">
                <unicon
                  name="arrow-down"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'asc'"
                />
                <unicon
                  name="arrow-up"
                  fill="royalblue"
                  width="1.2em"
                  height="1.2em"
                  v-if="currentSortDir == 'desc'"
                />
              </p>
              <p v-else>
                <unicon name="arrows-v" fill="royalblue" width="1.2em" height="1.2em" />
              </p>
            </th>
          </tr>
        </thead>
        <tbody v-if="type == 'regioni'">
          <tr v-for="regione in datiSorted" :key="regione.codice">
            <th scope="row">{{ regione.regione }}</th>
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
        <tbody v-else>
          <tr v-for="storico in datiSorted" :key="storico.data">
            <th scope="row">{{ storico.data }}</th>
            <td>{{ storico.casi }}</td>
            <td>{{ storico.totPos }}</td>
            <td>{{ storico.newPos }}</td>
            <td>{{ storico.ospedale }}</td>
            <td>{{ storico.terInt }}</td>
            <td>{{ storico.dimessi }}</td>
            <td>{{ storico.deceduti }}</td>
            <td>{{ storico.tamponi }}</td>
            <td>{{ storico.ricSintomi }}</td>
            <td>{{ storico.domicilio }}</td>
            <td>{{ storico.testati }}</td>
            <td>{{ storico.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "tableContainer",
  props: {
    type: String
  },
  data() {
    return {
      dati: [],
      data: "",
      currentSort: "",
      currentSortDir: "asc",
    };
  },
  created() {
    if (this.type == "regioni") {
      this.currentSort = "regione";
      this.loadRegions();
    } else {
      this.currentSort = "data";
      this.loadStorico();
    }
  },
  methods: {
    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
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
              tamponi: response.data[i].tamponi
            };
            if (response.data[i].note != null) {
              regioneTmp.note = response.data[i].note
                .toLowerCase()
                .replace(/^\w/, c => c.toUpperCase());
            } else {
              regioneTmp.note = "";
            }
            this.dati.push(regioneTmp);
          }
        })
        .catch(error => console.log(error));
    },
    loadStorico() {
      axios({
        url:
          "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"
      })
        .then(response => {
          var storicoTmp = {};
          for (let i = 0; i < response.data.length; i++) {
            storicoTmp = {
              data: this.timeConverter(response.data[i].data),
              casi: response.data[i].totale_casi,
              newPos: response.data[i].nuovi_positivi,
              dimessi: response.data[i].dimessi_guariti,
              deceduti: response.data[i].deceduti,
              tamponi: response.data[i].tamponi,
              terInt: response.data[i].terapia_intensiva,
              totPos: response.data[i].totale_positivi,
              ospedale: response.data[i].totale_ospedalizzati,
              ricSintomi: response.data[i].ricoverati_con_sintomi,
              domicilio: response.data[i].isolamento_domiciliare,
              testati: response.data[i].casi_testati
            };
            if (response.data[i].note != null) {
              storicoTmp.note = response.data[i].note
                .toLowerCase()
                .replace(/^\w/, c => c.toUpperCase());
            } else {
              storicoTmp.note = "";
            }
            this.dati.push(storicoTmp);
          }
        })
        .catch(error => console.log(error));
    },
    timeConverter(tmp) {
      var a = new Date(tmp);
      var year = a.getFullYear();
      var month =
        a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1;
      var date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
      var time = year + "-" + month + "-" + date;
      return time;
    }
  },
  computed: {
    datiSorted: function() {
      return this.dati.slice().sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
};
</script>

<style scoped>
thead th {
  vertical-align: top;
}
.tableWrap {
  height: 70vh;
  overflow: auto;
}
@media (max-width: 990px) {
  .tableWrap {
    height: 65vh;
  }
}
@media (max-width: 576px) {
  .tableWrap {
    height: 55vh;
  }
}
@media (max-width: 484px) {
  .tableWrap {
    height: 50vh;
  }
}
thead tr th {
  position: sticky;
  top: 0;
}
th {
  background: #212529;
  /* With border-collapse, we must use box-shadow or psuedo elements
  for the header borders */
  box-shadow: 0px 0px 0 1px #32383e;
}
</style>