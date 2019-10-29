<template>
  <div class="categories">
    <v-menu
      bottom
      transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="!isFilterSelected"
          v-on="on"
          icon
          color="primary">
          <v-icon>
            mdi-filter
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          icon
          color="grey"
          @click="clearCategoryFilter">
          <v-icon>
            mdi-filter-remov
          </v-icon>
        </v-btn>
      </template>

      <v-list class="categories__list">
        <v-list-item
          v-for="filter in filters"
          :key="filter.id"
          @click="filterByCategory(filter.id)">
          <v-list-item-title>
            {{ filter.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style lang="scss">
  .categories {
    text-align: right;
  }
  .categories__list {
    max-height: 300px;
    overflow-y: scroll;
  }
</style>

<script>
export default {
  data: () => ({
    isFilterSelected: false,
  }),
  props: {
    filters: Array,
  },
  methods: {
    filterByCategory(id) {
      this.isFilterSelected = true;
      this.$emit('filterByCategory', id);
    },
    clearCategoryFilter() {
      this.isFilterSelected = false;
      this.$emit('clearCategoryFilter');
    },
  },
};
</script>
