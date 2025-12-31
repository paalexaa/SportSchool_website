import axios from "axios";

const WP_API_URL = "https://dush.varashosvita.rv.ua/wp-json/wp/v2";

export const getNews = async (categoryId = null) => {
  try {
    const params = {
      _embed: true,
      per_page: 100,
    };

    if (categoryId) {
      params.categories = categoryId;
    }

    const response = await axios.get(`${WP_API_URL}/posts`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
