<template>
  <v-app>
    <v-layout column align-start>
      <v-container fluid>
        <v-layout row wrap>
          <!--プロジェクト選択と追加-->
          <v-flex xs12 sm3 md3 order-md1 order-sm1>
            <ProjectList />
          </v-flex>

          <!--メインコンテンツ-->
          <v-flex xs12 sm9 md9 order-md2 order-sm2>
            <v-card dark tile flat color="#FFFFFF" class="main-content pa-2">
              <div id="nav" class="box17">
                <router-link to="/home">Home</router-link>

                <router-link to="/">Login</router-link>
              </div>

              <transition name="page">
                <router-view />
              </transition>

              <!--掲示板-->
              <v-flex xs12>
                <v-card dark color="brown lighten-4">
                  <v-list-item three-line>
                    <v-list-item-content class="align-self-start">
                      <v-list-item-title class="headline mb-2">運営からのお知らせ！</v-list-item-title>
                      <v-list-item-subtitle>使い方講座 ①</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar size="120" tile>
                      <img
                        src="https://drive.google.com/uc?export=view&id=1HXcdxdYu_0BO8nSJEyljvJbTE3owLBKU"
                      />
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-flex>

              <v-container grid-list-md text-center>
                <v-layout row wrap>
                  <!--ガントチャート&bot-->
                  <v-flex v-for="item in item" :key="`6${item}`" xs12 md6>
                    <v-card :color="item.color" dark>
                      <v-list-item three-line>
                        <v-list-item-content class="align-self-start">
                          <v-list-item-title class="headline mb-2" v-text="item.title"></v-list-item-title>
                          <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar size="180" tile>
                          <v-img :src="item.src"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-card>
                  </v-flex>

                  <!--成績&ギャラリー-->
                  <v-flex v-for="item2 in item2" :key="`6${item2}`" xs12 md6>
                    <v-card :color="item2.color" dark>
                      <v-list-item three-line>
                        <v-list-item-content class="align-self-start">
                          <v-list-item-title class="headline mb-2" v-text="item2.title"></v-list-item-title>
                          <v-list-item-subtitle v-text="item2.artist"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar size="180" tile>
                          <v-img :src="item2.src"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import ProjectList from '../components/ProjectList';

export default {
  components: {
    ProjectList
  },
  data: () => ({
    item: [
      {
        color: "#41BFDD",
        title: "Calendar",
        artist: "ガントチャートを組み合わせたカレンダー",
        src:
          "https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-"
      },
      {
        color: "#FFB100",
        title: "Bot",
        artist: "タスクが近づくと教えてくれたり、褒めてくれます。",
        src:
          "https://drive.google.com/uc?export=view&id=1dq2A4l53agWXiTFJxnKdeD6O4bQ20ICr"
      }
    ],
    item2: [
      {
        color: "#FC785F",
        title: "Activity",
        artist: "活動の記録が見れます",
        src:
          "https://drive.google.com/uc?export=view&id=1fV-iYiVnrml6AOGlvAe6iBdMu5z4d_Ot"
      },
      {
        color: "#9DBE31",
        title: "Gallery",
        artist: "運営の趣味です",
        src:
          "https://drive.google.com/uc?export=view&id=1HJD52I4U27uXASqCxsfl-I-jOl4l7vhM"
      }
    ]
  })
};
</script>

<style scoped>
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