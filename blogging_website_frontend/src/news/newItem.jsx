import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/breadCrumb";

const WP_API_URL = "https://dush.varashosvita.rv.ua/wp-json/wp/v2";

const CATEGORY_MAP = {
  4: "Новини",
  6: "Баскетбол",
  7: "Волейбол",
  5: "Футбол",
  8: "Дзюдо",
  10: "Оголошення",
};

export default function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  async function fetchArticle() {
    setLoading(true);
    try {
      const response = await axios.get(`${WP_API_URL}/posts`, {
        params: {
          slug: slug,
          _embed: "wp:featuredmedia",
        },
      });

      if (response.data.length > 0) {
        const post = response.data[0];
        setArticle({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
          categories: post.categories
            .map((id) => CATEGORY_MAP[id])
            .filter(Boolean),
          date: new Date(post.date).toLocaleDateString("uk-UA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        });
      } else {
        setError("Новину не знайдено");
      }
    } catch (err) {
      console.error("Error fetching article:", err);
      setError("Помилка завантаження");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <Breadcrumb />
        <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10">
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006d63] mx-auto mb-4"></div>
            <p className="text-gray-600">Завантаження...</p>
          </div>
        </main>
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <Breadcrumb />
        <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10">
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 mb-4">
              {error || "Новину не знайдено"}
            </p>
            <a
              href="/новини"
              className="text-[#006d63] hover:underline font-semibold"
            >
              Повернутися до новин
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10">
        {/* Category Badge */}
        {article.categories.length > 0 && (
          <div className="mb-4">
            <span className="inline-block bg-[#006d63] text-white px-4 py-2 rounded-md text-sm font-semibold uppercase">
              {article.categories[0]}
            </span>
          </div>
        )}

        {/* Title */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>ДЮСШ Вараш</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{article.date}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.image && (
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        )}

        {/* Content */}
        <article
          className="prose prose-lg max-w-none
            prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-black
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[16px] sm:prose-p:text-[18px]
            prose-a:text-[#006d63] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-black prose-strong:font-semibold
            prose-ul:list-disc prose-ul:ml-6
            prose-ol:list-decimal prose-ol:ml-6
            prose-li:text-gray-700
            prose-img:rounded-lg prose-img:shadow-md
            prose-blockquote:border-l-4 prose-blockquote:border-[#006d63] prose-blockquote:pl-4"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t">
          <a
            href="/новини"
            className="inline-flex items-center gap-2 text-[#006d63] hover:text-[#005960] font-semibold transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Повернутися до всіх новин
          </a>
        </div>
      </main>
    </>
  );
}
