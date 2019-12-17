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
            <v-container grid-list-md text-center>
              <v-layout row wrap>
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import ProjectList from "../components/ProjectList";

export default {
  components: {
    ProjectList
  },
  data: () => ({
    item: [
      {
        rink: "/Calendar",
        color: "#41BFDD",
        title: "Calendar",
        artist: "ガントチャートを組み合わせたカレンダー",
        src:
          "https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-"
      },
      {
        rink: "/Bot",
        color: "#FFB100",
        title: "Bot",
        artist: "タスクが近づくと教えてくれたり、褒めてくれます。",
        src:
          "https://drive.google.com/uc?export=view&id=1dq2A4l53agWXiTFJxnKdeD6O4bQ20ICr"
      }
    ],
    item2: [
      {
        rink: "/Activity",
        color: "#FC785F",
        title: "UserList",
        artist: "活動の記録が見れます",
        src:
          "https://drive.google.com/uc?export=view&id=1fV-iYiVnrml6AOGlvAe6iBdMu5z4d_Ot"
      },
      {
        rink: "/Gallery",
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