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
              <h1 class="title">ほし12ガチャ</h1>
            </v-card-title>
            <v-card-subtitle>
              SPのほし12の曲がランダムで出てきます
            </v-card-subtitle>
            <v-card-actions @click="getSongGacha()">
              <v-btn text> まわす </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container>
      <transition-group name="slide-y-transition">
        <MusicCard
          v-for="item in gachaResult"
          :key="item.title"
          :title="item.title"
          :artist="item.artist"
          :bpm="item.bpm"
          :genre="item.genre"
        />
      </transition-group>
    </v-container>
  </v-app>
</template>

<script>
import MusicCard from '~/components/MusicCard'

export default {
  components: {
    MusicCard,
  },
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
    async getSongGacha() {
      this.gachaResult = []
      const count = 3
      const endpoint = process.env.API_BASE_URL
      await this.$axios
        .$get(endpoint, {
          params: {
            count,
          },
        })
        .then((res) => (this.gachaResult = res))
    },
  },
}
</script>

<style>
.v-anim-enter-active {
  opacity: 0.5s;
}
</style>
