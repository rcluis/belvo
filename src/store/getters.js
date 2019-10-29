export default {
  getFilters: (state) => {
    const filters = [];
    state.albums.forEach((album) => {
      const id = album.category.attributes['im:id'];
      const name = album.category.attributes.label;
      const existFilter = () => filters.some(filter => filter.id === id);
      if (!existFilter()) {
        filters.push({ id, name });
      }
    });
    return filters;
  },
};
