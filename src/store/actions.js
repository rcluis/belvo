
export default {
  fetchTopAlbums: async ({ commit }) => {

  },
  filterByText: ({ commit, getters }, query) => {
    console.log(getters);
    console.log(commit);
    console.log(query);
  },
};
