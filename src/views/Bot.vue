<template>
<v-app>
  <v-layout column align-start>
    <v-container fluid>
      <v-layout row wrap>

    <!--プロジェクト選択と追加-->
<v-flex xs12 sm3 md3 order-md1 order-sm1>
  <v-card dark tile flat color="grey darken-2" class="project-select">
    <v-card-text>＃プロジェクト名<br>＃プロジェクト名</v-card-text>
  </v-card>
</v-flex>

    <!--メインコンテンツ-->
<v-flex xs12 sm9 md9 order-md2 order-sm2>
  <v-card dark tile flat color="#FFFFFF" class="main-content pa-2">

      <v-card-title class="text-center justify-center py-6" color="#00D2E3">
        <h1 color="#00D2E3" class="font-weight-bold display-3 basil--text">Bot</h1>
      </v-card-title>

        <transition name="page">
            <router-view/>
        </transition>


    <router-link to="/Home" style="text-decoration:none;">
      <v-tabs
        v-model="tab"
        background-color="#707070"
        color="#00D2E3"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs></router-link>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
 
        </v-tab-item>
      </v-tabs-items>
  



    <!--bot-->
  
<v-card color="#FFFFFF" class="pr-5">
      </v-timeline>
      <v-timeline  dense>
        <v-timeline-item
          v-for="n in 2"
          :key="n"
        >
        <template v-slot:icon>
          <v-avatar size="75" tile >
            <img src= "https://drive.google.com/uc?export=view&id=1SKcQJQkJZYB6oMtBv-7FPX_yp7AXFEBq">
          </v-avatar>
        </template>
    
          <span slot="opposite">Tus eu perfecto</span>
          <v-card class="elevation-2">
            <v-card-title class="headline">Lorem ipsum</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
       </v-card>
</v-card>



</v-flex>
      
      </v-layout>
    </v-container>
  </v-layout>
</v-app>
</template>

<script>
   
export default {

  
  data: () => ({

   tab: null,
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],


  }),
};
</script>

<style scoped>
.basil {
background-color: #FFFBE6 !important;
}
.basil--text {
color: #356859 !important;
}
@media screen and (min-width: 500px) {
  .project-select  {
    height:800px;
  }
  .main-content{
    height:100%;
  }
  .sub-content{
     height:100%;
  }
}

</style>