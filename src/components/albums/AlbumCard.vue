<template>
  <v-card
    dark
    @click="openAlbum(album.id.attributes['im:id'])"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          v-text="album['im:name'].label"
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
  methods: {
    openAlbum(id) {
      this.$router.push({ name: 'album', params: { id } });
    },
  },
};
</script>
