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
            <GanttChart />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import ProjectList from "../components/ProjectList";
import GanttChart from "./GanttChart";

export default {
  components: {
    ProjectList,
    GanttChart
  },
  data: () => ({
    item: [
      {
        color: "#41BFDD",
        title: "Calendar",
        artist: "ガントチャートを組み合わせたカレンダー",
        src:
          "https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-"
      },
      {
        color: "#FFB100",
        title: "Bot",
        artist: "タスクが近づくと教えてくれたり、褒めてくれます。",
        src:
          "https://drive.google.com/uc?export=view&id=1dq2A4l53agWXiTFJxnKdeD6O4bQ20ICr"
      }
    ],
    item2: [
      {
        color: "#FC785F",
        title: "Activity",
        artist: "活動の記録が見れます",
        src:
          "https://drive.google.com/uc?export=view&id=1fV-iYiVnrml6AOGlvAe6iBdMu5z4d_Ot"
      },
      {
        color: "#9DBE31",
        title: "Gallery",
        artist: "運営の趣味です",
        src:
          "https://drive.google.com/uc?export=view&id=1HJD52I4U27uXASqCxsfl-I-jOl4l7vhM"
      }
    ],

    tab: null,
    items: ["Appetizers", "Entrees", "Deserts", "Cocktails"]
  })
};
</script>

<style scoped>
@media screen and (min-width: 500px) {
  .project-select {
    height: 100%;
  }
  .main-content {
    height: 100%px;
  }
  .sub-content {
    height: 100%;
  }
}
</style>