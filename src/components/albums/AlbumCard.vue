<template>
  <v-card
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          v-text="album.title.label"
        ></v-card-title>

        <v-card-subtitle v-text="album['im:artist'].label"></v-card-subtitle>
      </div>

      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="album['im:image'][2].label"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    album: Object,
  },
};
</script>
