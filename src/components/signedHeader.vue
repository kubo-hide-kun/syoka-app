<template>
  <v-app-bar app>
    <v-avatar>
      <img
        src="https://pbs.twimg.com/profile_images/1064010537665609728/4oTOHpow_400x400.jpg"
        alt="icon"
      />
    </v-avatar>
    <div class="searchForm">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        full-width="100px"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="プロジェクトの検索"
      />
    </div>

    <v-spacer />

    <v-btn text target="_blank" @click="transitionPage('/home')">
      <span class="mr-2">ホーム</span>
    </v-btn>
    <v-btn text target="_blank" @click="transitionPage('/calendar')">
      <span class="mr-2">スケジュール</span>
    </v-btn>
    <v-btn text target="_blank" @click="transitionPage('/bot')">
      <span class="mr-2">bot</span>
    </v-btn>
    <v-btn text target="_blank" @click="transitionPage('/profile')">
      <span class="mr-2">プロフィール</span>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <span class="mr-2">もっと見る</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(page, index) in pages" :key="index" @click="transitionPage(page.link)">
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-avatar>
      <img
        src="https://pbs.twimg.com/profile_images/1064010537665609728/4oTOHpow_400x400.jpg"
        alt="icon"
      />
    </v-avatar>
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
        { title: "アクティビティ", link: "/activity" },
        { title: "ギャラリー", link: "/gallery" },
        { title: "設定", link: "/config" },
        { title: "ログアウト", link: "logout" }
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
      console.log(this.select);
    }, 500);
  },
  methods: {
    transitionPage: function(page) {
      if (page === "logout") this.$store.state.signed = false;
      else if (page === "/home") this.$router.push(page);
      else if (page === "/calendar") this.$router.push(page);
      else if (page === "/bot") this.$router.push(page);
      else if (page === "/activity") this.$router.push(page);
      else if (page === "/gallery") this.$router.push(page);
      else alert("該当ページは存在しません " + page);
    },
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
.searchForm {
  max-width: 300px;
}
</style>
