import Api from '@/services/api';

const getTopAlbums = async () => {
  try {
    const { feed } = await Api.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
    return feed.entry;
  } catch (e) {
    return [];
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getTopAlbums };
