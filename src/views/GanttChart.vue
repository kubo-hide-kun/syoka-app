<template>
  <div class="demo-app">
    <!-- <div class="demo-app-top">
      <button @click="toggleWeekends">toggle weekends</button>
      <button @click="gotoPast">go to a date in the past</button>
      (also, click a date/time to add an event)
    </div>-->
    <FullCalendar
      class="demo-app-calendar"
      ref="fullCalendar"
      defaultView="resourceTimelineDay"
      :header="{
        left: 'prev,next today',
        center: isMobileView 
          ? ''
          : 'title',
        right: isGanttChart 
          ? 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
          : 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      :resources="calendarResources"
      @eventClick="handleEventClick"
    />
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
      isGanttChart: true,
      isMobileView: true,
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
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    },
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
  margin: 0 0 3em;
}

.demo-app-calendar {
  margin: 30px;
}
</style>
