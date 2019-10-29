<template>
  <v-text-field
    v-model=filterText
    placeholder="Type an album"
    filled
    dense
    solo
    rounded
    clearable
    append-icon="mdi-magnify"
    class="search-bar"
    @click:append="filterByText"
    @click:clear="clearSearchFilter">
  </v-text-field>
</template>

<style lang="scss">
  .search-bar {
    .v-input__slot {
      box-shadow: none !important;
    }
  }
</style>

<script>
export default {
  data: () => ({
    filterText: '',
  }),
  props: {},
  methods: {
    filterByText() {
      this.$emit('filterByText', this.filterText);
    },
    clearSearchFilter() {
      this.$emit('clearSearchFilter');
    },
  },
};
</script>
