<template>
  <v-card class="album pa-10">
    <div class="d-flex flex-wrap justify-space-between">
      <div>
        <v-card-title class="pa-0 mb-3">
          <p class="font-weight-bold mb-0">
            {{ info['im:name'].label }}
          </p>
        </v-card-title>
        <v-card-subtitle class="pa-0">
          <p class="mb-0">
            Author: {{ info['im:artist'].label }}
          </p>
        </v-card-subtitle>
        <v-card-text class="px-0 font-weight-light body-2">
            {{ info.category.attributes.label }}
        </v-card-text>
      </div>
      <div>
        <v-card>
          <v-img
            class="album__img"
            :alt="info['im:name'].label"
            :src="info['im:image'][2].label"
            contain
          ></v-img>
        </v-card>
        <p class="mt-2">
          <span class="body-1">
            {{ info['im:itemCount'].label }} songs
          </span>
          <span class="font-weight-thin ml-2 body-2">
          {{ info['im:price'].label }}
        </span>
        </p>
        <p class="pa-0 body-2">
          Released: {{ info['im:releaseDate'].attributes.label }}
        </p>
      </div>
    </div>
    <v-card-actions class="pa-0">
      <v-btn
        outlined
        @click="goToAlbum(info.link.attributes.href)"
      >
        Go to album
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
  .album {
    .album__img {
      border-radius: 5px;
    }
  }
</style>

<script>
export default {
  props: {
    info: Object,
  },
  methods: {
    goToAlbum(url) {
      window.open(url, '_blank');
    },
  },
};
</script>
