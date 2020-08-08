<template>
  <div>
    <h4 class="text">Grafici dal 24-02-2020 ad oggi</h4>
    <h5 class="text chartTitle">Nuovi positivi</h5>
    <d-button class="btnLoad" v-if="btn1" @click="renderChart('pos')">Carica</d-button>
    <div id="chart"></div>
    <h5 class="text chartTitle">Ricoverati con sintomi</h5>
    <d-button class="btnLoad" v-if="btn2" @click="renderChart('sint')">Carica</d-button>
    <div id="chart1"></div>
    <h5 class="text chartTitle">In terapia intensiva</h5>
    <d-button class="btnLoad" v-if="btn3" @click="renderChart('int')">Carica</d-button>
    <div id="chart2"></div>
    <h5 class="text chartTitle">Ospedalizzati</h5>
    <d-button class="btnLoad" v-if="btn4" @click="renderChart('osp')">Carica</d-button>
    <div id="chart3"></div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import axios from "axios";
export default {
  name: "grafici",
  data() {
    return {
      nuoviPositivi: [],
      ricSintomi: [],
      terInt: [],
      ospedalizzati: [],
      giorni: [],
      btn1: true,
      btn2: true,
      btn3: true,
      btn4: true
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios({
        url:
          "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"
      })
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            this.nuoviPositivi.push(response.data[i].nuovi_positivi);
            this.ricSintomi.push(response.data[i].ricoverati_con_sintomi);
            this.terInt.push(response.data[i].terapia_intensiva);
            this.ospedalizzati.push(response.data[i].totale_ospedalizzati);
            this.giorni.push(this.timeConverter(response.data[i].data));
          }
        })
        .catch(error => console.log(error));
    },
    renderChart(mode) {
      var dati = undefined;
      var nome = "";
      var selettore = "";
      switch (mode) {
        case "pos":
          dati = this.nuoviPositivi;
          this.btn1 = false;
          nome = "nuoviPositivi";
          selettore = "#chart";
          break;
        case "sint":
          dati = this.ricSintomi;
          this.btn2 = false;
          nome = "conSintomi";
          selettore = "#chart1";
          break;
        case "int":
          dati = this.terInt;
          this.btn3 = false;
          nome = "terapiaIntensiva";
          selettore = "#chart2";
          break;
        case "osp":
          dati = this.ospedalizzati;
          this.btn4 = false;
          nome = "ospedalizzati";
          selettore = "#chart3";
          break;
      }
      document.querySelector(selettore).style.visibility = "visible";
      var options = {
        chart: {
          type: "area"
        },
        series: [
          {
            name: nome,
            data: dati
          }
        ],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.giorni
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        },
        stroke: {
          curve: "smooth",
          lineCap: "butt"
        },
        fill: {
          type: "gradient",
          gradient: {
            enabled: true,
            opacityFrom: 0.5,
            opacityTo: 0.5
          }
        },
        colors: ["#4169e1"]
      };

      var chart = new ApexCharts(document.querySelector(selettore), options);

      chart.render();
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
  }
};
</script>

<style scoped>
#chart {
  max-width: 100%;
  margin: 0 auto;
}
.chartTitle {
  margin-top: 1em;
}
.btnLoad {
  margin: 0.5em auto;
}
#chart,
#chart1,
#chart2,
#chart3 {
  visibility: hidden;
}
</style>