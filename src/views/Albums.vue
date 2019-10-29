<template>
    <v-container
      d-inline-flex
      flex-row flex-wrap
      class="albums">
      <v-row>
        <v-col sm="12">
          <SearchBar @filterByText="filterByText"/>
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
import { mapState } from 'vuex';
import AlbumCard from '@/components/albums/AlbumCard.vue';
import SearchBar from '@/components/albums/SearchBar.vue';

export default {
  name: 'albums',
  components: {
    AlbumCard,
    SearchBar,
  },
  data: () => ({
    info: null,
  }),
  computed: {
    ...mapState(['albums']),
  },
  mounted() {
    this.$store.dispatch('fetchTopAlbums');
  },
  methods: {
    filterByText(text) {
      this.$store.dispatch('filterByText', text);
    },
  },
};
</script>
