<template>
    <v-container
      justify="center"
      class="albums">
      <v-row no-gutters>
        <v-col cols="10">
          <SearchBar
            @filterByText="filterByText"
            @clearSearchFilter="clearAlbums">
          </SearchBar>
        </v-col>
        <v-col cols="2">
          <Categories
            :filters="filters"
            @filterByCategory="filterByCategory"
            @clearCategoryFilter="clearAlbums">
          </Categories>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col
          xl="5"
          sm="12"
          v-for="album in paginatedAlbums"
          :key="album.id.attributes['im:id']">
          <AlbumCard :album="album"></AlbumCard>
        </v-col>
        <v-col cols="12">
          <v-pagination
            v-model="page"
            :length="totalPages"
            circle>
          </v-pagination>
        </v-col>
        <v-col
          v-if="albums.length === 0"
          cols="12"
          class="text-center">
          <p>
            There are no albums with the searched criteria
          </p>
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
  data: () => ({
    page: 1,
    pageSize: 10,
  }),
  computed: {
    ...mapState(['albums']),
    paginatedAlbums() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.albums.slice(start, end);
    },
    filters() {
      return this.$store.getters.getFilters;
    },
    totalPages() {
      return Math.abs(this.albums.length / this.pageSize);
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
