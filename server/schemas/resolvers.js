const Content = require("../models");
const axios = require("axios");
const APIKEY = process.env.GOOGLE_API_KEY;
const playlistID = process.env.PLAYLIST_ID;
const resolvers = {
  Query: {
    content: async (_, args) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "snippet",
              playlistId: playlistID,
              maxResults: 50,
              key: APIKEY,
            },
          }
        );
        if (response.status !== 200) {
          throw new Error(`failed to fetch videos: ${response.status.text}`);
        }

        return response.data.items.map((item) => ({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          desc: item.snippet.description,
        }));
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
