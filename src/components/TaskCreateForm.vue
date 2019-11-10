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
            <v-card elevation=2>
              <mavon-editor v-model="description" language="ja" ref="md" />
            </v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
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
      description: ""
    };
  }
};
</script>