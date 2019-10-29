<template>
    <v-container
      justify="center"
      class="albums">
      <v-row no-gutters>
        <v-col cols="10">
          <SearchBar
            @filterByText="filterByText"
            @clearSearchFilter="clearAlbums"
          />
        </v-col>
        <v-col cols="2">
          <Categories
            :filters="filters"
            @filterByCategory="filterByCategory"
            @clearCategoryFilter="clearAlbums"
          />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col
          xl="5"
          sm="12"
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
import Categories from '@/components/albums/Categories.vue';

export default {
  name: 'albums',
  components: {
    Categories,
    AlbumCard,
    SearchBar,
  },
  computed: {
    ...mapState(['albums']),
    filters() {
      return this.$store.getters.getFilters;
    },
  },
  mounted() {
    this.$store.dispatch('fetchTopAlbums');
  },
  methods: {
    filterByText(text) {
      this.$store.dispatch('filterByText', text);
    },
    clearAlbums() {
      this.$store.dispatch('clearAlbums');
    },
    filterByCategory(id) {
      this.$store.dispatch('filterByCategory', id);
    },
  },
};
</script>
