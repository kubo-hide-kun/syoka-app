<template>
  <v-card dark tile flat color="grey darken-2" class="project-select">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <p class="display-1 text--bold-white">Projects</p>
        </v-col>
        <v-col cols="6" md="4">
          <v-dialog v-model="dialog" persistent max-width="60%">
            <template v-slot:activator="{ on }">
              <div class="my-4">
                <v-btn color="green darken-1" class="center" large v-on="on">
                  <b>新規作成</b>
                </v-btn>
              </div>
            </template>
            <v-card>
              <div class="ma-6">
                <v-card-title class="headline">プロジェクトを追加する</v-card-title>
                <v-text-field v-model="title" label="参加したプロジェクト名を入力" outlined></v-text-field>
                <v-btn text small color="primary">プロジェクトを新規作成する</v-btn>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="green darken-1" text @click="dialog = false">キャンサル</v-btn>
                  <v-btn color="green darken-1" text @click="post">参加</v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-dialog>
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
      dialog: false,
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
    },
    post() {
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.center {
  text-align: center;
}
</style>