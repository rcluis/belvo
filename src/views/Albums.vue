<template>
    <v-container
      d-inline-flex
      flex-row flex-wrap
      class="albums">
      <v-row>
        <v-col sm="12">
          <SearchBar />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col
          lg="5"
          sm="12"
          class="ma-2"
          v-for="album in albums"
          :key="album.id.attributes['im:id']"
        >
          <AlbumCard :album="album" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import AlbumCard from '@/components/albums/AlbumCard.vue';
import SearchBar from '@/components/albums/SearchBar.vue';

export default {
  name: 'albums',
  components: {
    AlbumCard,
    SearchBar,
  },
  data: () => ({
    albums: [],
    info: null,
  }),
  mounted() {
    axios
      .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(({ data }) => {
        this.albums = data.feed.entry;
      });
  },
};
</script>
