<template>
  <v-container
    flex-wrap
    >
    <v-row justify="center">
      <v-col>
          <AlbumInfoCard v-if="albumInfo"  :info="albumInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumInfoCard from '@/components/album/AlbumInfoCard.vue';

export default {
  name: 'album',
  components: {
    AlbumInfoCard,
  },
  data: () => ({
  }),
  computed: {
    ...mapState(['albums']),
    albumInfo() {
      const { id } = this.$route.params;
      return this.albums.find((album) => {
        const albumId = album.id.attributes['im:id'];
        return albumId === id;
      });
    },
  },
};
</script>
