<template>
  <v-card dark tile flat color="grey darken-2" class="project-select">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <p class="display-1 text--bold-white">Projects</p>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn color="green darken-1" class="center">新規作成</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list rounded>
      <v-list-item-group v-model="project">
        <v-list-item v-for="(project, i) in projects" :key="i">
          <v-list-item-content @click="choiceProjects(project)">
            <v-list-item-title v-text="project.title" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon
              v-text="project.isFire ? 'mdi-fire':''"
              :color="projects.isFire ? '':'orange darken-3'"
            />
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: "A-projects", isFire: true },
        { title: "B-projects", isFire: false },
        { title: "C-projects", isFire: false },
        { title: "D-projects", isFire: true }
      ]
    };
  },
  methods: {
    choiceProjects(project) {
      console.log(project.title);
    }
  }
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>