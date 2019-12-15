<template>
<v-app>
    <v-layout column align-start>
      <v-container fluid>
        <v-layout row wrap>

            <v-card color="#E8E7E7" class="pa-2" height="500">

 
              <v-container id="scroll-target" style="max-height: 450px" class="overflow-y-auto">
                <v-row v-scroll:#scroll-target="onScroll" align="top" justify="center">

                  <!--ガントチャート&bot-->
                  <v-flex v-for="item in item" :key="`6${item}`" xs12 md4 class="pa-2">

                      <v-card :color="item.color" dark>

                        <v-list-item three-line 
                          <v-list-item-content class="align-self-start">
                            <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                          </v-list-item-content>

                            <v-img :src="item.src"></v-img>

                        </v-list-item>
                      </v-card>
                          <div class="text-center pa-2">

                          <a :href="item.src" :download="item.src">
                        <v-btn rounded outlined color="#00D2E3" class="button">PNG画像の保存</v-btn>
                        </a>
                        </div>

                  </v-flex>
                  
                </v-row>
              </v-container>
            </v-card>

        </v-layout>
      </v-container>
    </v-layout>
</v-app>
</template>

<script>
const easings = {
  easeInOutCubic: '',
}

export default {

  data () {
    return {
    item: [
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1x0GKvBPFGXXl6RyircWEboenBxeIsLtN',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1TWZJTRd6uNoDk6Ffr2Qd5g96zFJdShbe',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1iCEvmUTG1wXexB7qb2dfIQJoIw7eB9-H',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1bCsTrYL4DyTkKyfIkjFJxBUnlWoHKukJ',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1fAsoq7kXVqJYwNUtkOaYdKn278U38BLW',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-',
      },
      { 
        color: '#FFFFFF', 
        src:
          'https://drive.google.com/uc?export=view&id=1M301zAIBSYzs7B7TD9Hk_jtMucaCaJ4-',
      },
    ],
    }
  },

};

</script>

<style scoped>
.button {
  border:solid 2px #00D2E3;
  background-color: #FFFFFF;
}

a {
  text-decoration: none;
}
</style>
