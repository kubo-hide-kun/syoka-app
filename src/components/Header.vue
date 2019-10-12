<template>
  <v-app-bar app>
    <v-avatar>
      <img
        src="https://pbs.twimg.com/profile_images/1064010537665609728/4oTOHpow_400x400.jpg"
        alt="icon"
      >
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

    <v-spacer></v-spacer>

    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="ページの検索"
    ></v-autocomplete>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'ホーム / home',
        'ログイン / signin',
        '登録 / signup',
        '特徴 / feature',
        '機能 / contents',
        'ご利用の流れ / usage',
        'お問い合わせ / contact',
      ],
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  mounted() {
    setInterval(() => {
     // console.log(this.select);
    }, 500);
  },
  methods: {
    querySelections:  function(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
};
</script>

<style scoped>
.headline {
  margin: 0 20px; 
}
</style>
