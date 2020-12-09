<template>
  <v-app>
    <header>
      <v-toolbar
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon @click="drawerOpen()" />
        <v-toolbar-title>IIDXほし12ガチャ</v-toolbar-title>
        <v-spacer />
        <div>
          <v-btn text @click="moveShare()">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawerOpened"
        v-click-outside="drawerClose"
        absolute
        temporary
      >
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item @click="moveTwitter()">
              <v-icon> mdi-account-circle </v-icon>
              つくった人
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card class="headline">
            <v-card-title>
              <h1 class="title">IIDXほし12ガチャ</h1>
            </v-card-title>
            <v-card-subtitle>
              ランダムなほし12の曲が出てきます
            </v-card-subtitle>
            <v-card-actions @click="getSongGacha()">
              <v-btn text> まわす </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    // ゴミ
    <v-container>
      <v-row dense class="result">
        <v-col md="12" class="ml-md-auto">
          <v-card class="pa-2">
            <v-card-title> 3y3s </v-card-title>
            <v-card-subtitle> 青龍 </v-card-subtitle>
            <v-card-text>
              <div>ジャンル: DANCE SPEED</div>
              <div>BPM: 191</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense class="result">
        <v-col md="12" class="ml-md-auto">
          <v-card class="pa-2">
            <v-card-title> Plan 8 </v-card-title>
            <v-card-subtitle> Ryu☆ </v-card-subtitle>
            <v-card-text>
              <div>ジャンル: HAPPY GABBA</div>
              <div>BPM: 212</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense class="result">
        <v-col md="12" class="ml-md-auto">
          <v-card class="pa-2">
            <v-card-title> Go Beyond!! </v-card-title>
            <v-card-subtitle> Ryu☆ Vs. Sota </v-card-subtitle>
            <v-card-text>
              <div>ジャンル: TRANCE CORE</div>
              <div>BPM: 200</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawerOpened: false,
      gachaResult: [],
    }
  },
  methods: {
    drawerOpen() {
      this.drawerOpened = true
    },
    drawerClose() {
      if (!this.drawerOpened) {
        this.drawerOpened = false
      }
    },
    moveTwitter() {
      window.location = 'https://twitter.com/Close_the_World'
    },
    moveShare() {
      window.location =
        'https://twitter.com/intent/tweet?text=IIDXほし12ガチャ&url=https://closetheworld.me/gacha'
    },
    getSongGacha() {
      // APIをキックする
    },
  },
}
</script>

<style>
.title {
  display: flex;
  text-align: center;
}
</style>
