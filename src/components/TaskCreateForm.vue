<template>
  <div>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="60%">
        <template v-slot:activator="{ on }">
          <div class="my-4">
            <v-btn color="success" x-large v-on="on">
              <b>タスクの新規作成</b>
            </v-btn>
          </div>
        </template>
        <v-card>
          <div class="ma-6">
            <v-card-title class="headline">新規作成</v-card-title>
            <v-text-field v-model="title" label="イベント名" outlined></v-text-field>
            <p>・詳細(MarkDown対応)</p>
            <v-card elevation="2">
              <mavon-editor v-model="description" language="ja" ref="md" />
            </v-card>
            <v-row>
              <v-col cols="12" lg="6">
                <v-dialog
                  ref="dialog2"
                  v-model="endDay"
                  :return-value.sync="limitDate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="limitDate" label="終了日" readonly v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="limitDate" scrollable>
                    <v-spacer />
                    <v-btn text color="primary" @click="endDay = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog2.save(limitDate)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" lg="6">
                <v-dialog
                  ref="dialog4"
                  v-model="endTime"
                  :return-value.sync="limitTime"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="limitTime" label="終了時刻" readonly v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="endTime" v-model="limitTime" full-width>
                    <v-spacer />
                    <v-btn text color="primary" @click="endTime = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog4.save(limitTime)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <div>
              <tr>
                <td width="70%">
                  <v-text-field v-model="inputTag" label="追加するタグ" outlined></v-text-field>
                </td>
                <td width="10%">
                  <v-btn color="blue" dark class="ma-1" @click="addTag">タグ追加</v-btn>
                </td>
              </tr>
            </div>
            <div class="chip-list">
              <div v-for="(tag,key) in tags" :key="key" class="tag-chips">
                <v-chip
                  class="ma-1"
                  small
                  close
                >{{tag}}</v-chip>
              </div>
            </div>
            <v-card-actions>
              <v-spacer />
              <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

export default {
  data() {
    return {
      dialog: false,
      title: "",
      description: "",
      limitDate: new Date().toISOString().substr(0, 10),
      limitTime: null,
      endDay: false,
      endTime: false,
      tags: []
    };
  },
  methods :{
    addTag() {
      if (!this.inputTag) return;
      this.tags.push(this.inputTag);
      this.inputTag = "";
    },
  }
};
</script>

<style scoped>
.chip-list {
  display: flex;
  flex-wrap: wrap;
}
</style>