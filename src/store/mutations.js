export default {
  setCurrentAlbums: (state, albums) => {
    state.albums = albums;
  },
  clearAlbums: (state) => {
    state.albums = [...state.initialAlbums];
  },
  initAlbums: (state, albums) => {
    state.initialAlbums = albums;
    state.albums = albums;
  },
};
