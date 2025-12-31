import { useEffect, useState } from "react";
import { getNews } from "../api/wordpress";
import NewsCard from "../components/newsCard";

const CATEGORY_MAP = {
  4: "Новини",
  6: "Баскетбол",
  7: "Волейбол",
  5: "Футбол",
  8: "Дзюдо",
  10: "Оголошення",
};

export default function News() {
  const [news, setNews] = useState([]);
  const [activeCategory, setActiveCategory] = useState(4);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 4, name: "Новини" },
    { id: 6, name: "Баскетбол" },
    { id: 7, name: "Волейбол" },
    { id: 5, name: "Футбол" },
    { id: 8, name: "Дзюдо" },
    { id: 10, name: "Оголошення" },
  ];

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  async function fetchNews(categoryId) {
    setLoading(true);
    try {
      const data = await getNews(categoryId);

      const mappedNews = data.map((item) => ({
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        category: item.categories.map((id) => CATEGORY_MAP[id]).filter(Boolean),
        date: new Date(item.date).toLocaleDateString("uk-UA"),
      }));

      setNews(mappedNews);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[100px] xl:px-[140px] py-8">
      <h1 className="font-montserrat font-semibold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] mb-6">
        Актуальні новини
      </h1>

      {/* Категорії */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg border font-medium transition-colors duration-200 text-[12px] sm:text-[15px] ${
              activeCategory === cat.id
                ? "bg-[#006d63] text-white border-[#006d63]"
                : "bg-[#E9EFF1] text-gray-800 border-transparent hover:bg-[#006d63] hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Новини */}
      {loading ? (
        <div className="text-center py-10">Завантаження...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.length > 0 ? (
            news.map((item) => <NewsCard key={item.id} item={item} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center py-10">
              Немає новин у цій категорії.
            </p>
          )}
        </div>
      )}
    </main>
  );
}
