<template>
<v-app>
    <v-layout column align-start>
      <v-container fluid>
        <v-layout row wrap>


            <v-card color="#FFFFFF" class="pr-5" height="570">

              <v-btn  ref="button"  block color="#00D2E3" @click="$vuetify.goTo(target, options)">
                scroll
              </v-btn>
       
              <v-container id="scroll-target" style="max-height: 450px" class="overflow-y-auto">
                <v-row v-scroll:#scroll-target="onScroll" align="top" justify="center">
                  <v-timeline  dense>
                    <v-timeline-item v-for="n in 7" :key="n">
                      <template v-slot:icon>
                        <v-avatar size="75" tile >
                          <img src= "https://drive.google.com/uc?export=view&id=1SKcQJQkJZYB6oMtBv-7FPX_yp7AXFEBq">
                        </v-avatar>
                      </template>
                      <span slot="opposite">
                        Tus eu perfecto
                      </span>
                      <v-card class="elevation-2">
                        <v-card-title class="headline">
                          Lorem ipsum
                        </v-card-title>
                        <v-card-text>
                          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </v-row>
              </v-container>



                         <v-col cols="12">
            <v-text-field
              v-model="message"
              :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
              :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
              :prepend-icon="icon"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Message"
              type="text"
              @click:append="toggleMarker"
              @click:append-outer="sendMessage"
              @click:prepend="changeIcon"
              @click:clear="clearMessage"
            ></v-text-field>
          </v-col>


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
function goBottom(targetId) {
    var obj = document.getElementById(targetId);
    if(!obj) return;
    obj.scrollTop = obj.scrollHeight;
}

function test(){
  var a = document.documentElement;
  var y = a.scrollHeight - a.clientHeight;
  window.scroll(0, y);
}

export default {

  data () {
    return {
      type: 'number',
      number: 9999,
      duration: 500,
      offset: 0,
      easing: 'easeInOutCubic',
      password: 'Password',
      show: false,
      message: 'Hey!',
      marker: true,
      iconIndex: 0,
      icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue',
      ],
    }
  },

  computed: {
   icon () {
      return this.icons[this.iconIndex]
    },
    target () {
      const value = this[this.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
  },

methods: {
   // スクロール位置を一番下に移動
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
    
    toggleMarker () {
      this.marker = !this.marker
    },
    sendMessage () {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
    resetIcon () {
      this.iconIndex = 0
    },
    changeIcon () {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
  },

};

</script>

<style scoped>

</style>

