<template>
  <v-app>
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
                    <router-link :to="item.rink" style="text-decoration:none;">
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
                    </router-link>
                  </v-flex>

                  <!--成績&ギャラリー-->
                  <v-flex v-for="item2 in item2" :key="`6${item2}`" xs12 md6>
                    <router-link :to="item2.rink" style="text-decoration:none;">
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
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <!--サブコンテンツ-->
          <v-flex xs12 sm3 md3 order-md3 order-sm3>
            <v-card dark tile flat color="transparent" class="sub-content">
              <v-flex xs12 order-sm1>
                <img
                  height="100%"
                  width="100%"
                  class="pr-3 pl-3"
                  src="https://drive.google.com/uc?export=view&id=1x0GKvBPFGXXl6RyircWEboenBxeIsLtN"
                />
              </v-flex>
              <v-flex xs12 order-sm2>
                <img
                  height="100%"
                  width="100%"
                  class="pr-8 pl-8"
                  src="https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H"
                />
              </v-flex>
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
    item: [
      {
        rink: "/calendar",
        color: "#41BFDD",
        title: "Calendar",
        artist: "ガントチャートを組み合わせたカレンダー",
        src:
          "https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-"
      },
      {
        rink: "/bot",
        color: "#FFB100",
        title: "Bot",
        artist: "タスクが近づくと教えてくれたり、褒めてくれます。",
        src:
          "https://drive.google.com/uc?export=view&id=1dq2A4l53agWXiTFJxnKdeD6O4bQ20ICr"
      }
    ],
    item2: [
      {
        rink: "/activity",
        color: "#FC785F",
        title: "Activity",
        artist: "活動の記録が見れます",
        src:
          "https://drive.google.com/uc?export=view&id=1fV-iYiVnrml6AOGlvAe6iBdMu5z4d_Ot"
      },
      {
        rink: "/gallery",
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
