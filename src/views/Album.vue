<template>
  <v-container flex-wrap>
    <v-row justify="center">
      <v-col>
        <AlbumInfoCard
          v-if="albumInfo"
          :info="albumInfo">
        </AlbumInfoCard>
      </v-col>
      <v-col
        v-if="!albumInfo"
        cols="12"
        class="text-center">
        <p>
          This album does not exist
        </p>
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
  mounted() {
    if (this.albums.length === 0) {
      this.$store.dispatch('fetchTopAlbums');
    }
  },
};
</script>
