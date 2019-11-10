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
          <v-card-title class="headline">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>