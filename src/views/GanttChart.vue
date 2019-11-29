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
      isGanttChart: 0,
      isMobileView: false,
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
          start: new Date("November 9, 2019 9:00:00"),
          end: new Date("November 9, 2019 18:00:00"),
          resourceIds: ["窪田"],
          tags: ["js","Markdown"]
        },
        // initial event mock data
        {
          id: "sdkjb",
          discription: "default text",
          title: "Event Now2",
          start: new Date("November 9, 2019 9:00:00"),
          end: new Date("November 9, 2019 18:00:00"),
          resourceIds: ["窪田", "鳥越"],
          tags: ["Python"]
        }
      ]
    };
  },
  methods: {
    handleEventClick(arg) {
      console.log(arg.event.id);
      console.log(arg.event.title);
      console.log(this.calendarEvents.filter(event => event.id == arg.event.id)[0].discription)
      console.log(arg.event.start);
      console.log(arg.event.end);
      console.log(...arg.event._def.resourceIds);
      console.log(...this.calendarEvents.filter(event => event.id == arg.event.id)[0].tags)
    },
    handleEventMouseEnter(arg) {
      console.log(arg.event.id);
      console.log(arg.event.title);
      console.log(this.calendarEvents.filter(event => event.id == arg.event.id)[0].discription)
      console.log(arg.event.start);
      console.log(arg.event.end);
      console.log(...arg.event._def.resourceIds);
      console.log(...this.calendarEvents.filter(event => event.id == arg.event.id)[0].tags)
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
