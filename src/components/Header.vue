<template>
  <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app>
    <v-avatar color="grey lighten-2">
      <img
        src="https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H"
        alt="icon"
      />
    </v-avatar>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <v-icon
            v-text="'mdi-format-list-bulleted'"
          />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(page, index) in pages" :key="index" @click="transitionPage(page.link)">
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <v-app-bar v-else app>
    <v-avatar color="grey lighten-2">
      <img
        src="https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H"
        alt="icon"
      />
    </v-avatar>
    <v-toolbar-title class="headline">
      <span>ShoKa Manager</span>
    </v-toolbar-title>
    <v-btn text target="_blank">
      <span class="mr-2">特徴</span>
    </v-btn>
    <v-btn text target="_blank">
      <span class="mr-2">機能</span>
    </v-btn>
    <v-btn text target="_blank">
      <span class="mr-2">ご利用の流れ</span>
    </v-btn>
    <v-btn text target="_blank">
      <span class="mr-2">お問い合わせ</span>
    </v-btn>

    <v-spacer />

    <div class="searchForm">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        qcache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="ページの検索"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        "ホーム / home",
        "ログイン / signin",
        "登録 / signup",
        "特徴 / feature",
        "機能 / contents",
        "ご利用の流れ / usage",
        "お問い合わせ / contact"
      ],
      pages: [
        { title: "特徴", link: "/feature" },
        { title: "機能", link: "/feature" },
        { title: "ご利用の流れ", link: "/usage" },
        { title: "お問い合わせ", link: "connect" }
      ]
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  mounted() {
    setInterval(() => {
      // console.log(this.select);
    }, 500);
  },
  methods: {
    querySelections: function(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.headline {
  margin: 0 20px;
}
.searchForm {
  width: 425px;
}
</style>
