import { getTopAlbums } from '@/services/music';

export default {
  fetchTopAlbums: async ({ commit }) => {
    const topAlbums = await getTopAlbums();
    commit('initAlbums', topAlbums);
  },
  filterByText: ({ commit, state }, text) => {
    const { initialAlbums } = state;
    const filteredAlbums = initialAlbums.filter((album) => {
      const sanitizedText = text.toLowerCase().replace(/\s/g, '');
      const albumTitle = album.title.label.toLowerCase();
      return albumTitle.indexOf(sanitizedText) !== -1;
    });
    commit('setCurrentAlbums', filteredAlbums);
  },
  clearAlbums: ({ commit }) => {
    commit('clearAlbums');
  },
  filterByCategory: ({ commit, state }, id) => {
    const { initialAlbums } = state;
    const filteredAlbums = initialAlbums.filter((album) => {
      const albumCategoryId = album.category.attributes['im:id'];
      return albumCategoryId === id;
    });
    commit('setCurrentAlbums', filteredAlbums);
  },
};
