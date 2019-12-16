<template>
  <div class="demo-app">
    <div>
      <div class="demo-app-top">
        <TaskCreateForm />
        <v-bottom-navigation :value="isGanttChart" color="deep-purple accent-4">
          <v-btn @click="isGanttChart = 0">
            <span>Calendar</span>
            <v-icon>mdi- mdi-calendar</v-icon>
          </v-btn>
          <v-btn @click="isGanttChart = 1">
            <span>GanttChart</span>
            <v-icon>mdi-chart-histogram</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </div>
    <FullCalendar
      v-if="isGanttChart"
      class="demo-app-calendar"
      ref="fullGanttChart"
      defaultView="resourceTimelineMonth"
      :header="{
        left: 'prev,next today',
        center: isMobileView 
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
    <div v-else>
      <FullCalendar
        class="demo-app-calendar"
        ref="fullCalendar"
        defaultView="dayGridMonth"
        :header="{
        left: 'prev,next today',
        center: isMobileView 
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
                  <v-btn text color="primary" @click="endTime = false">キャンセル</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog4.save(limitTime)">変更を反映</v-btn>
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
          <v-slider
            v-model = "progress"
            max=100
            label = "完了度(%)"
          />
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
              <v-text-field v-model="limitDate" label="終了日" readonly v-on="on"></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field v-model="limitTime" label="終了時刻" readonly v-on="on"></v-text-field>
            </v-col>
          </v-row>
          <div class="chip-list">
            <div v-for="(tag,key) in tags" :key="key" class="tag-chips">
              <v-chip class="ma-1" small >{{tag}}</v-chip>
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

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

import TaskCreateForm from "../components/TaskCreateForm";

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
      isGanttChart: 0,
      isMobileView: false,
      isEditing: false,
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
        resourceTimelinePlugin
      ],
      calendarWeekends: true,
      calendarResources: [
        { title: "resource a", id: "a" },
        { title: "resource b", id: "b" }
      ],
      calendarEvents: [
        // initial event mock data
        {
          id: "0i0",
          title: "Event Now",
          discription: "sample text",
          progress: 50,
          start: new Date("November 9, 2019 9:00:00"),
          end: new Date("November 9, 2019 18:08:00"),
          resourceIds: ["窪田"],
          tags: ["js", "Markdown"]
        },
        // initial event mock data
        {
          id: "sdkjb",
          discription: "default text",
          title: "Event Now2",
          progress: 25,
          start: new Date("October 9, 2019 9:00:00"),
          end: new Date("October 9, 2019 18:09:00"),
          resourceIds: ["窪田", "鳥越"],
          tags: ["Python"]
        }
      ]
    };
  },
  methods: {
    handleEventClick(arg) {
      this.id = arg.event.id;
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
      const postDatas = {
        id: this.id,
        title: this.title,
        progress: this.progress,
        description: this.description,
        start: this.start,
        end: this.end,
        resourceIds: this.resourceIds,
        tags: this.tags
      };
      console.log(postDatas);
    }
  }
};
</script>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 1rem;
}

.demo-app-top {
  margin: 0 60px;
}

.demo-app-calendar {
  margin: 60px;
}
</style>
