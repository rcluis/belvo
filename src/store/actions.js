import { getTopAlbums } from '@/services/music';

export default {
  fetchTopAlbums: async ({ commit }) => {
    const topAlbums = await getTopAlbums();
    commit('initAlbums', topAlbums);
  },
  filterByText: ({ commit, state }, text) => {
    console.log(state.albums);
    console.log(commit);
    console.log(text);
  },
};
