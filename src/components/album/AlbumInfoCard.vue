<template>
  <v-container class="album pa-10">
    <v-row no-gutters>
      <v-col sm="12" md="4" lg="4">
        <v-img
          class="album__img"
          height="170"
          width="170"
          :alt="info['im:name'].label"
          :src="info['im:image'][2].label"
          contain
        />
        <p class="mt-2 text-center">
          <span>{{ info['im:itemCount'].label }} songs</span>
          <span class="font-weight-thin ml-2">{{ info['im:price'].label }}</span>
        </p>
      </v-col>
      <v-col  sm="12" md="5" lg="6">
        <p class="font-weight-bold mb-0">{{ info['im:name'].label }}</p>
        <p class="mb-0">{{ info['im:artist'].label }}</p>
        <p class="font-weight-light">{{ info.category.attributes.label }}</p>
      </v-col>
      <v-col sm="12" md="3" lg="2">
        <v-btn
          outlined
          @click="goToAlbum(info.link.attributes.href)"
        >
          Go to album
        </v-btn>
      </v-col>
    </v-row>
    <p>{{ info['im:releaseDate'].attributes.label }}</p>
  </v-container>
</template>

<style lang="scss">
  .album {
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    background-color: white;
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
