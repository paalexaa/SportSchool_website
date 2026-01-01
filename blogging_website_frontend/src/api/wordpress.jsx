import axios from "axios";

const WP_API_URL = "https://dush.varashosvita.rv.ua/wp-json/wp/v2";

// In-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getNews = async (categoryId = null) => {
  const cacheKey = `news-${categoryId}`;
  const cached = cache.get(cacheKey);

  // Return cached data if it exists and is fresh
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const params = {
      _embed: true,
      per_page: 100,
    };

    if (categoryId) {
      params.categories = categoryId;
    }

    const response = await axios.get(`${WP_API_URL}/posts`, { params });

    // Store in cache
    cache.set(cacheKey, {
      data: response.data,
      timestamp: Date.now(),
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
