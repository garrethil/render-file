const axios = require("axios");

const getContent = async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: "snippet",
          playlistId: process.env.PLAYLIST_ID,
          maxResults: 50,
          key: process.env.GOOGLE_API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      return res.status(response.status).json({ error: response.statusText });
    }

    function parseDescription(description) {
      // Split the description by lines
      const lines = description
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "");

      // Find the line that contains the date (assuming it follows the format "month day year")
      const dateIndex = lines.findIndex((line) =>
        /\b\w+ \d{1,2} \d{4}\b/.test(line)
      );

      if (dateIndex === -1) {
        // Handle case where no date is found (optional)
        return { dateLine: null, contentBlock: description };
      }

      // Extract the date
      const dateLine = lines[dateIndex];

      // Extract the content lines after the date
      const contentLines = lines.slice(dateIndex + 1);

      // Join the content lines back into a single string
      const contentBlock = contentLines.join("\n");

      return { dateLine, contentBlock };
    }

    const content = response.data.items.map((item) => {
      const { dateLine, contentBlock } = parseDescription(
        item.snippet.description
      );
      return {
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        desc: contentBlock,
        date: dateLine,
      };
    });

    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

module.exports = { getContent };
