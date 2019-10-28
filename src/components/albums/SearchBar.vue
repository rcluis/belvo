<template>
  <v-text-field
    v-model=filterText
    filled
    dense
    solo
    rounded
    clearable
    append-icon="mdi-magnify"
    class="search-bar"
    @click:append="filterByText"
    >
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
      console.log(this.filterText);
    },
  },
};
</script>
