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
              <v-card color="#FFFFFF" class="pr-5 z-bot">
                <v-btn
                  ref="button"
                  block
                  color="#00D2E3"
                  @click="$vuetify.goTo(target, options)"
                >scroll</v-btn>

                <v-container id="scroll-target" style="max-height: 75vh" class="overflow-y-auto">
                  <v-row v-scroll:#scroll-target="onScroll" align="top" justify="center">
                    <v-timeline dense>
                      <v-timeline-item v-for="n in responce.length" :key="n" class="ma-6">
                        <template v-slot:icon>
                          <v-avatar size="75" tile>
                            <img
                              src="https://drive.google.com/uc?export=view&id=1SKcQJQkJZYB6oMtBv-7FPX_yp7AXFEBq"
                            />
                          </v-avatar>
                        </template>
                        <v-card class="elevation-2">
                          <v-card-text>{{responce[n-1].text}}</v-card-text>
                        </v-card>
                      </v-timeline-item>
                    </v-timeline>
                  </v-row>
                </v-container>

                <v-col cols="12">
                  <v-text-field
                    v-model="message"
                    :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                    :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                    :prepend-icon="icon"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Message"
                    type="text"
                    @click:append="toggleMarker"
                    @click:append-outer="sendMessage"
                    @click:prepend="changeIcon"
                    @click:clear="clearMessage"
                  />
                </v-col>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import ProjectList from "../components/ProjectList";
import firebase from '../fire';


export default {
  components: {
    ProjectList
  },
  data() {
    return {
      type: "number",
      number: 9999,
      duration: 500,
      offset: 0,
      easing: "easeInOutCubic",
      password: "Password",
      show: false,
      message: "Hey!",
      marker: true,
      iconIndex: 0,
      icons: [
        "mdi-emoticon",
        "mdi-emoticon-cool",
        "mdi-emoticon-dead",
        "mdi-emoticon-excited",
        "mdi-emoticon-happy",
        "mdi-emoticon-neutral",
        "mdi-emoticon-sad",
        "mdi-emoticon-tongue"
      ],
      responce: [
        {text: "メグルさんにアサインされている仕事が少なく余裕があるようです"},
        {text: "クボ太郎さんがタスクの進行状況の雲行きが怪しいです。タスクの分散を行いましょう"},
        {text: "クボ太郎さんの持っているプロジェクトのAの進行状況が怪しいです"},
        {text: "メグルさんがissueAを完了しました"},
        {text: "トリッピーさんが新しくチームに加わりました。クボ太郎さんの仕事を分散させましょう。"},
        {text: "分散によりチーム内のタスクの偏りが解決されました！"},
        {text: "クボ太郎さんがissueBを完了させました"}
      ]
    };
  },

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  },

  methods: {
    // スクロール位置を一番下に移動
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight);
      });
    },

    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
      let mess = this.message;
      //mess = プロジェクト名と考える
      let record = firebase.firestore().collection('projects').doc(mess).get;
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    }
  }
};
</script>

<style scoped>
</style>

