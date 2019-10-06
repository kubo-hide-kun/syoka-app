<template>
  <!--Vuetifyを使用する範囲-->
  <v-app>

<svg  height="8%" z-index="2">
    <ellipse cx="50%" cy="30%" rx="60%" ry="50%" fill="#41BFDD" />
    <g font-family="sans-serif" fill="white" font-size="200%">
            <text x="50%" y="50%" text-anchor="middle">
            Shoka Manager
        </text>
    </g>
</svg>


    <!--Vuetifyのレイアウトシステムでサイドメニューと連動させるために必要なタグ。-->
    <!--<v-content>-->
      <!--Vuetifyでレイアウトを設定する範囲ー親要素-->
      <v-container>
        <!--親要素コンテンツごとのレイアウトを決める-->
        <v-layout wrap>
          <!--子要素-コンテンツの中のギャラリー-->
          <v-flex>
<div id="app">




  <v-app id="inspire">
  <!--パララックス背景-->



  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    height="800"
  >

  <v-row
    align="center"
    justify="center"
  >

  <h1 class="display-2 font-weight-thin mb-4">Vuetify.js</h1>
  <h4 class="subheading">

      <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
  
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
  
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </h4>

  <img
  height="400px"
  width="300px"
  src="../assets/syoka-main.png"
  elevation="12"
  >

  </v-row>

    </v-parallax>
<!--cardの設定-->



<v-card
  max-width="100%"
        class="mt-n12"
        elevation="12"
>
      <v-container
        class="pa-10"
        fluid
      >
  <v-row>
    <!--cardのレイアウト構成順番-->
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
    >
<!--cardのレイアウト-->
<v-flex xs12 md12>
<v-card>

              <v-img
                :src="card.src"
                class="white--text"
                height="200px"
                width="100%"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title
                  class="fill-height align-end"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
                  <v-card-text>
        <span>Number 10</span><br>
        <span class="text--primary">
          <span>Whitehaven Beach</span><br>
          <span>Whitsunday Island, Whitsunday Islands</span>
        </span>
      </v-card-text>

</v-card>
</v-flex>
  </v-col>
</v-row></v-container>
</v-card>



<br>
<v-flex 
  class="mt-10">
 <v-card
      max-width="100%"
      class="mt-n12"
        elevation="12"
    >
      <v-card-title>I'm a title rrrr</v-card-title>
      <v-card-text>I'm card text</v-card-text>
      <v-card-actions>
        <v-btn text>Click</v-btn>
      </v-card-actions>
    </v-card>
</v-flex>



  </v-app>
</div>
          </v-flex>

        </v-layout>
      </v-container>

<!--ガイドライン-->

          <!--ガイドライン内のギャラリー-->
    <!--</v-content>-->

  </v-app>
</template>
<script>
export default {
  data: () => ({
cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
    ],
  }),
};
</script>