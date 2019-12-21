<template>
  <div>
    <div>
      <div class="ma-6">
        <TaskCreateForm />
        <v-bottom-navigation :value="isGanttChart" color="deep-purple accent-4">
          <v-btn @click="isGanttChart = 0">
            <span>Calendar</span>
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
          <v-btn @click="isGanttChart = 1">
            <span>GanttChart</span>
            <v-icon>mdi-chart-histogram</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </div>
    <FullCalendar
      v-if="isGanttChart && isFinishLoad"
      class="ma-6"
      ref="fullGanttChart"
      defaultView="resourceTimelineMonth"
      :header="{
        left: $vuetify.breakpoint.xsOnly
          ? 'prev,next'
          : 'prev,next today',
        center: $vuetify.breakpoint.xsOnly
          ? ''
          : 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      :resources="calendarResources"
      @eventClick="handleEventClick"
    />
    <div v-else-if="isFinishLoad">
      <FullCalendar
        class="ma-6 demo-app"
        ref="fullCalendar"
        defaultView="dayGridMonth"
        :header="{
        left: $vuetify.breakpoint.xsOnly
          ? 'prev,next'
          : 'prev,next today',
        center: $vuetify.breakpoint.xsOnly 
          ? ''
          : 'title',
        right: 'timeGridDay,timeGridWeek,listWeek,dayGridMonth'
      }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        :resources="calendarResources"
        @eventClick="handleEventClick"
        @eventMouseEnter="handleEventMouseEnter"
      />
    </div>

    <v-dialog v-model="dialog" persistent max-width="60%">
      <v-card v-if="isEditing">
        <div class="ma-6">
          <v-card-title class="headline">
            予定の編集
            <v-spacer />
            <v-btn color="green darken-1" text @click="isEditing = false">元の画面へ</v-btn>
          </v-card-title>
          <v-text-field v-model="title" label="イベント名" outlined />
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
                  <v-text-field v-model="limitDate" label="終了日" readonly v-on="on" />
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
                  <v-text-field v-model="limitTime" label="終了時刻" readonly v-on="on" />
                </template>
                <v-time-picker v-if="endTime" v-model="limitTime" full-width>
                  <v-spacer />
                  <v-btn text color="primary" @click="endTime = false">キャンセル</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog4.save(limitTime)">変更を反映</v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>
          <div>
            <tr>
              <td width="70%">
                <v-text-field v-model="inputTag" label="追加するタグ" outlined />
              </td>
              <td width="10%">
                <v-btn color="blue" dark class="ma-1" @click="addTag">タグ追加</v-btn>
              </td>
            </tr>
          </div>
          <div class="chip-list">
            <div v-for="(tag,key) in tags" :key="key" class="tag-chips">
              <v-chip class="ma-1" small close @click:close="removeTag(tag)">{{tag}}</v-chip>
            </div>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="post">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="post">Agree</v-btn>
          </v-card-actions>
        </div>
      </v-card>

      <v-card v-else>
        <v-card-title class="headline">
          {{title}}
          <v-spacer />
          <v-btn color="green darken-1" text @click="isEditing = true">編集画面へ</v-btn>
        </v-card-title>
        <div class="ma-6">
          <v>炎上確率 {{enjoud}}%</v>
          <v-slider v-model="progress" max="100" label="完了度(%)" thumb-label="always" />
          <v-card elevation="2">
            <mavon-editor
              v-model="description"
              language="ja"
              :subfield="false"
              defaultOpen="preview"
              :toolbars="false"
            />
          </v-card>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field v-model="limitDate" label="終了日" readonly v-on="on" />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field v-model="limitTime" label="終了時刻" readonly v-on="on" />
            </v-col>
          </v-row>
          <div class="chip-list">
            <div v-for="(tag,key) in tags" :key="key" class="tag-chips">
              <v-chip class="ma-1" small>{{tag}}</v-chip>
            </div>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="post">キャンセル</v-btn>
            <v-btn color="green darken-1" text @click="post">変更を反映</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import firebase from "../fire";

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

import TaskCreateForm from "../components/TaskCreateForm";

let uid = localStorage.getItem("uid");
let pro = localStorage.getItem("project");
let record = firebase
  .firestore()
  .collection("users")
  .doc(uid);
let name = "";
record.get().then(reco => {
  if (reco.exists) {
    console.log(reco.data().name);
    name = reco.data().name;
  }
});
let sabun = {};

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    TaskCreateForm
  },
  data: function() {
    return {
      dialog: false,
      id: "",
      title: "",
      progress: 0,
      description: "",
      start: null,
      end: null,
      resourceIds: [],
      tags: [],
      limitDate: null,
      limitTime: null,
      endDay: false,
      endTime: false,
      isGanttChart: false,
      isMobileView: false,
      isEditing: false,
      isFinishLoad: false,
      enjoud: 0,
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
        resourceTimelinePlugin
      ],
      calendarWeekends: true,
      calendarResources: [
        { title: "resource a", id: "窪田" },
        { title: "resource b", id: "　鳥越" }
      ],
      calendarEvents: [
        // initial event mock data
        {
          id: "a",
          title: "Event Now",
          discription: "sample text",
          progress: 50.0,
          start: new Date("November 9, 2019 9:00:00"),
          end: new Date("November 9, 2019 18:08:00"),
          resourceIds: ["窪田"],
          project: "tst",
          tags: ["js", "Markdown"]
        },
        // initial event mock data
        {
          id: "sdkjb",
          discription: "default text",
          title: "Event Now2",
          progress: 25.0,
          project: "test",
          start: new Date("October 9, 2019 9:00:00"),
          end: new Date("October 9, 2019 18:09:00"),
          resourceIds: ["窪田", "鳥越"],
          tags: ["Python"]
        }
      ]
    };
  },
  beforeCreate() {
    let citiesRef = firebase.firestore().collection("tasks");
    citiesRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let limit = doc.data().end.seconds - doc.data().start.seconds;

          let time = new Date().getTime();
          let keika = doc.data().end.seconds - Math.floor(time / 1000);

          let sisu = limit * (doc.data().progress / keika / 100) - 1;
          let enjoud = -1 * sisu + 0.1;

          console.log(sisu);
          console.log(enjoud);
          this.enjoud = enjoud;
          this.calendarEvents.push({
            id: doc.id,
            title: doc.data().title,
            discription: doc.data().discription,
            project: doc.data().project,
            progres: doc.data().progress,
            start: new Date(doc.data().start.seconds * 1000),
            end: new Date(doc.data().end.seconds * 1000),
            resourceIds: [doc.data().resourceIds],
            tags: doc.data().tags,
            enjoud: enjoud
          });
          console.log(this.calendarEvents);
        });
        this.isFinishLoad = true;
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  },
  watch: {
    progress: () => console.log(this)
  },
  methods: {
    handleEventClick(arg) {
      sabun = {
        title: arg.event.title,
        progress: arg.event.progress,
        description: arg.event.description,
        start: arg.event.start,
        end: arg.event.end,
        resourceIds: arg.event.resourceIds,
        tags: arg.event.tags
      };
      this.id = arg.event.id;
      this.enjoud = this.calendarEvents.filter(
        event => event.id == arg.event.id
      )[0].enjoud;
      this.title = arg.event.title;
      this.progress = this.calendarEvents.filter(
        event => event.id == arg.event.id
      )[0].progress;
      this.description = this.calendarEvents.filter(
        event => event.id == arg.event.id
      )[0].discription;
      this.start = arg.event.start;
      this.end = arg.event.end;
      this.resourceIds = arg.event._def.resourceIds;
      this.tags = this.calendarEvents.filter(
        event => event.id == arg.event.id
      )[0].tags;
      this.project = this.calendarEvents.filter(
        event => event.id == arg.event.id
      )[0].project;
      this.limitDate =
        arg.event.end.getFullYear() +
        "-" +
        (1 + arg.event.end.getMonth()) +
        "-" +
        arg.event.end.getDate();
      this.limitTime =
        arg.event.end.getHours() +
        ":" +
        ("00" + arg.event.end.getMinutes()).slice(-2);
      this.dialog = true;
    },
    post() {
      this.dialog = false;
      this.isEditing = false;
      let key = this.id;
      console.log(this.id);

      let end = this.end.getTime();
      let endsecond = Math.floor(end / 1000);
      let start = this.start.getTime();
      let startsecond = Math.floor(start / 1000);
      let limit = endsecond - startsecond;
      let time = new Date().getTime();
      let keika = endsecond - Math.floor(time / 1000);

      let sisu = limit * (this.progress / keika / 100) - 1;

      let enjoud = (-1 * sisu + 0.1) * 100;
      if (enjoud <= 0) {
        enjoud = 0.01;
      }
      if (enjoud >= 100) {
        enjoud = 99;
      }
      console.log(enjoud);

      const postDatas = {
        title: this.title,
        progress: this.progress,
        project: this.project,
        description: this.description,
        start: this.start,
        end: this.end,
        resourceIds: this.resourceIds,
        tags: this.tags,
        enjoud: this.enjoud
      };

      firebase
        .firestore()
        .collection("tasks")
        .doc(key)
        .set(postDatas);
      firebase
        .firestore()
        .collection("activity")
        .add(postDatas);
      if (enjoud >= 70) {
        firebase
          .firestore()
          .collection("projects")
          .doc(this.project)
          .set({ fireflag: true });
      }
      console.log(postDatas);

      console.log(postDatas);
    }
  }
};
</script>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.5rem;
}
</style>
