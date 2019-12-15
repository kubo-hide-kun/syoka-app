<template>
  <v-app v-if="url">

    <v-layout column align-start>
      <v-container fluid>
        <v-layout row wrap>
         
          <!--プロジェクト選択と追加-->
          <v-flex xs12 sm3 md3 order-md1 order-sm1>
            <v-card dark tile flat color="grey darken-2" class="project-select">
              <v-card-text>
                ＃プロジェクト名
                <br />＃プロジェクト名
              </v-card-text>
            </v-card>
          </v-flex>

          <!--メインコンテンツ-->
          <v-flex xs12 sm6 md6 order-md2 order-sm2>
            <v-card dark tile flat color="#FFFFFF" class="main-content pa-2">
              <v-card-title class="text-center justify-center py-6" color="#00D2E3">
                <h1 color="#00D2E3" class="font-weight-bold display-3 basil--text">{{ selectedComponent }}</h1>
              </v-card-title>
                <v-tabs v-model="tab" background-color="#707070" color="#00D2E3" grow class="pa-1">
                  <v-tab>
                    <router-link to="/home" class="basil--text">ホーム</router-link>
                  </v-tab>
                  <v-tab>
                   カレンダ
                  </v-tab>

                  <v-tab>
                  <router-link to="/Bot" class="basil--text">ボット</router-link>
                  </v-tab>
                  
                  <v-tab>
                    日記
                  </v-tab>
                  <v-tab>
                    <router-link to="/Gallery" class="basil--text">ギャラリー</router-link>
                  </v-tab>                                         
                </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in items" :key="item"></v-tab-item>
              </v-tabs-items>
              <component :is="selectedComponent"/>       
            </v-card>
          </v-flex>

          <!--サブコンテンツ-->
          <v-flex xs12 sm3 md3 order-md3 order-sm3>
            <v-card dark tile flat color="transparent" class="sub-content">
              <v-flex xs12 order-sm1>
                <img height="100%" width="100%" class="pr-3 pl-3" src="https://drive.google.com/uc?export=view&id=1x0GKvBPFGXXl6RyircWEboenBxeIsLtN"/>
              </v-flex>
              <v-flex xs12 order-sm2>
                <img height="100%" width="100%" class="pr-8 pl-8" src="https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H"/>
              </v-flex>
            </v-card>
          </v-flex>



        </v-layout>
      </v-container>
    </v-layout>




  </v-app>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: "tab",
  components: {
    Home,

  },

  data () {
    return {
      selectedComponent: '',
    }
  },

  computed: {
  url() {
    return location.pathname.match(/^\/home|^\/bot|^\/Gallery/);
  }
  }


};
</script>

<style scoped>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #FFFFFF !important;
  font-weight:  bold;
}
a {
  text-decoration: none;
}
@media screen and (min-width: 500px) {
  .project-select {
    height: 100%;
  }
  .main-content {
    height: 100%px;
  }
  .sub-content {
    height: 100%;
  }
}
</style>