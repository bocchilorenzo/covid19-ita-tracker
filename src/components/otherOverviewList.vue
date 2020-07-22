<template>
  <d-list-group>
    <d-list-group-item>
      <b class="titleListItem">Totale positivi:</b>
      <Roller :transition="transitionTime" :isStatic="true" :text="datiMain.totPos" />
    </d-list-group-item>
    <d-list-group-item>
      <b class="titleListItem">Casi testati:</b>
      <Roller :transition="transitionTime" :isStatic="true" :text="datiMain.testati" />
    </d-list-group-item>
    <d-list-group-item>
      <b class="titleListItem">Ricoverati con sintomi:</b>
      <Roller :transition="transitionTime" :isStatic="true" :text="datiMain.ricSintomi" />
    </d-list-group-item>
    <d-list-group-item>
      <b class="titleListItem">Totale ospedalizzati:</b>
      <Roller :transition="transitionTime" :isStatic="true" :text="datiMain.totOspedalizzati" />
    </d-list-group-item>
    <d-list-group-item>
      <b class="titleListItem">Isolamento domiciliare:</b>
      <Roller :transition="transitionTime" :isStatic="true" :text="datiMain.domicilio" />
    </d-list-group-item>
  </d-list-group>
</template>

<script>
import Roller from "vue-roller";
export default {
  name: "listOther",
  data(){
    return{
      transitionTime: 2.5
    }
  },
  components: {
    Roller
  },
  props:{
      datiMain: Object
  }
};
</script>