<template>
  <v-app>
    <v-layout wrap>
      <v-flex>
        <div id="app" class="pa-0 ma-0">
          <v-app id="inspire" class="pa-0 ma-0">
            <svg height="80" wlass="pa-0 ma-0">
              <ellipse cx="50%" cy="30%" rx="60%" ry="70%" fill="#41BFDD" />
              <g font-family="sans-serif" fill="white" font-size="200%">
                <text x="50%" y="65%" text-anchor="middle">Shoka VPM</text>
              </g>
            </svg>
            <v-flex class="pr-0 pl-0 flex-parallax">
              <v-parallax
                class="pr-5 pl-5 pt-0 parallax"
                src="https://drive.google.com/uc?export=view&id=1TWZJTRd6uNoDk6Ffr2Qd5g96zFJdShbe"
              >
                <v-row align="center" justify="center">
                  <v-flex xs12 sm12 md4>
                    <v-form ref="form" v-model="valid" lazy-validation class="login-form pa-10">
                      <v-text-field v-model="email" :rules="emailRules" label="email" required></v-text-field>
                      <v-text-field
                        v-model="pass"
                        type="password"
                        :rules="passRules"
                        label="pass"
                        required
                      ></v-text-field>
                      <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                      />
                      <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-2 mt-2"
                        @click="signIn"
                      >login</v-btn>
                      <v-btn color="error" class="mr-2 mt-2" @click="reset">reset</v-btn>

                      <v-dialog v-model="dialog" persistent max-width="400">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            class="mt-2"
                            color="warning"
                            dark
                            @click.stop="dialog = true"
                          >new acount</v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="headline">新規登録！</v-card-title>
                          <v-text-field label="Name*" v-model="name" required class="mr-5 ml-5" />
                          <v-text-field label="Email*" v-model="email" required class="mr-5 ml-5" />
                          <v-text-field
                            v-model="pass"
                            label="Password*"
                            type="password"
                            required
                            class="mr-5 ml-5"
                          />
                          <v-card-actions>
                            <v-checkbox
                              v-model="checkbox"
                              :rules="[v => !!v || 'You must agree to continue!']"
                              label="Do you agree?"
                              required
                              class="ml-3"
                            />
                            <v-btn color="green darken-1" text @click="dialog = false">キャンセル</v-btn>
                            <v-btn color="green darken-1" text @click="cleateaccount">登録</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-form>
                  </v-flex>
                  <img
                    height="300"
                    width="300"
                    class="cube ml-5"
                    src="https://drive.google.com/uc?export=view&id=1x0GKvBPFGXXl6RyircWEboenBxeIsLtN"
                  />
                  <img
                    height="400"
                    width="265"
                    src="https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H"
                  />
                </v-row>
              </v-parallax>
            </v-flex>
            <br />

            <v-flex class="mt-n12 pt-5 pr-3 pl-3" elevation="12">
              <v-card class="pr-3 pl-3">
                <v-row>
                  <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-flex>
                      <v-card height="300px" width="400px">
                        <v-img
                          :src="card.src"
                          class="white--text"
                          height="200px"
                          width="100%"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        >
                          <v-card-title class="fill-height align-end" v-text="card.title" />
                        </v-img>
                        <v-card-text class="text--primary" v-text="card.text" />
                      </v-card>
                    </v-flex>
                  </v-col>
                </v-row>
              </v-card>
            </v-flex>
            <br />

            <v-flex class="mt-n12 pt-10 pr-3 pl-3" elevation="12" z-index="10" absolute="ture">
              <v-card class="pr-3 pl-3">
                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item
                    v-for="(item, i) in items"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                  >
                    <v-card :color="item.color" dark>
                      <v-card-title class="title" v-text="item.title" />
                      <v-card-text class="white text--primary" v-text="item.text" />
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-card>
            </v-flex>
          </v-app>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import firebase from "../fire";
export default {
  methods: {
    cleateaccount: function() {
      this.dialog = false;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pass)
        .then(user => {
          alert("Create account: ", this.email);
          firebase
            .firestore()
            .collection("users")
            .doc(user.user.uid)
            .set({
              name: this.name
            });
        })
        .catch(error => {
          alert(error.message);
        });
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(user => {
          console.log(user.user.uid);
          localStorage.setItem("uid", user.user.uid);
          this.$router.push("/home");
        })
        .catch(err => {
          alert(err.message);
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "email is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    pass: "",
    passRules: [v => !!v || "pass is required"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    dialog: false,
    cards: [
      {
        title: "プロジェクトの進行度を可視化",
        src:
          "https://drive.google.com/uc?export=view&id=1PFl6xkPjJM8SajaPz6FyaVFn0zZYp4i9",
        text:
          "独自のアルゴリズムでチームの開発の進行状況を数値化し、完成までの逆算を行います。"
      },
      {
        title: "開発スケジュールの作成",
        src:
          "https://drive.google.com/uc?export=view&id=1MGgyDgQ1XwfC9u_WoCFlvXeQyYZlOm8B",
        text:
          "カレンダー機能で用途に合わせたタスクが追加できます、追加したタスクはフィルタ検索機能によりタスク確認の効率化が行えます。"
      },
      {
        title: "チーム間のヒヤリング",
        src:
          "https://drive.google.com/uc?export=view&id=1rDpAT-QK6hzex-6VV35wTpevAbJnpdyG",
        text:
          "個人のタスクに遅延が起きた場合やすれ違いの際に、全員に情報が共有されます。ミスしたタスクはチームメンバーから助太刀をしてもらいましょう！"
      }
    ],
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
        title: "プロジェクトを立ち上げよう！",
        text:
          "メイン画面にある左上のプロジェクト立ち上げボタンからプロジェクト名を決めて、参加メンバーを追加しよう！"
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: "開発スケジュールを作成しよう！",
        text:
          "プロジェクト画面にあるカレンダー機能を使ってスケジュールをいつでも編集しよう！完成したスケジュールはチームメンバーとリアルタイムで共有できる！"
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
        title: "チーム全体の開発進行度を見渡そう！",
        text:
          "各プロジェクトメイン画面に開発進行度はしょーかちゃんが開発の進行状況を解析し数値化したもの！タスクが遅れた場合はしょーかちゃんがチームメンバー全員に知らせてくれます！"
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
        title: "フィルタ検索機能でタスクを管理しよう！",
        text:
          "左上にあるフィルタ検索機能からプロジェクトの確認とタスクを確認しよう！終了したタスクは完了ボタンんを忘れずに！"
      }
    ]
  })
};
</script>

<style scoped>
.login-form {
  border-radius: 20px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  height: 350px;
  box-shadow: 2px 2px 4px gray;
}
.cube {
  animation: cube 3s linear infinite;
  transform-origin: 50% 50%;
  margin: 1rem 0 !important;
}
@keyframes cube {
  0% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-10px);
  }
  66.66667% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 500px) {
  .flex-parallax {
    height: 1000px;
  }
  .parallax {
    height: 100%;
  }
}
</style>