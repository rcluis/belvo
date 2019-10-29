export default {
  setCurrentAlbums: (state, albums) => {
    state.albums = albums;
  },
  initAlbums: (state, albums) => {
    state.initialAlbums = albums;
    state.albums = albums;
  },
};
