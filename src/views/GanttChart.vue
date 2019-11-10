<template>
  <div class="demo-app">
    <div class="demo-app-top">
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

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
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
          title: "Event Now",
          start: new Date("November 9, 2019 9:00:00"),
          end: new Date("November 9, 2019 18:00:00"),
          resourceId: "a"
        }
      ]
    };
  },
  methods: {
    handleEventClick(arg) {
      console.log(arg);
    }
  }
};
</script>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-top {
  margin: 30px;
}

.demo-app-calendar {
  margin: 30px;
}
</style>
