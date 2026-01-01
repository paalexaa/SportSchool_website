import { useMemo, useState, useEffect } from "react";
import { getNews } from "../api/wordpress";
import NewsCard from "../components/newsCard";
import heroBanner from "../imgs/banner_svg.svg";
import heroBannerMob from "../imgs/bannerMob_svg.svg";
import { Link } from "react-router-dom";

const TABS = [
  "Новини",
  "Баскетбол",
  "Волейбол",
  "Футбол",
  "Дзюдо",
  "Оголошення",
];

const CATEGORY_MAP = {
  4: "Новини",
  6: "Баскетбол",
  7: "Волейбол",
  5: "Футбол",
  8: "Дзюдо",
  10: "Оголошення",
};

// Тимчасові дані (щоб бачити дизайн). Пізніше підставиш дані з API.
// const ALL_NEWS = [
//   {
//     _id: "1",
//     slug: "opituvannya-dyussh",
//     title:
//       "ОПИТУВАННЯ З ПИТАНЬ ЕФЕКТИВНОСТІ ДІЯЛЬНОСТІ СПОРТИВНИХ КЛУБІВ ТА ДИТЯЧО-ЮНАЦЬКИХ…",
//     image: "https://picsum.photos/seed/1/800/600",
//     category: ["Новини", "Волейбол"],
//     date: "11.04.2025",
//   },
//   {
//     _id: "2",
//     slug: "voleibol-sriblo-oblasti",
//     title: "Юні волейболісти вибороли срібло чемпіонату області",
//     image: "https://picsum.photos/seed/2/800/600",
//     category: "Волейбол",
//     date: "24.03.2025",
//   },
//   {
//     _id: "3",
//     slug: "poperedzhennya-matchi",
//     title: "Три поєдинки поновлюються після перерви",
//     image: "https://picsum.photos/seed/3/800/600",
//     category: "Оголошення",
//     date: "24.02.2025",
//   },
//   {
//     _id: "4",
//     slug: "basketbol-peremoga",
//     title: "Перемога баскетбольної команди у міському турнірі",
//     image: "https://picsum.photos/seed/4/800/600",
//     category: "Баскетбол",
//     date: "18.03.2025",
//   },
//   {
//     _id: "5",
//     slug: "dzyudo-vidkryte-trenuvannya",
//     title: "Дзюдоїсти провели відкрите тренування",
//     image: "https://picsum.photos/seed/5/800/600",
//     category: "Дзюдо",
//     date: "12.03.2025",
//   },
//   {
//     _id: "6",
//     slug: "futbol-nabir-2025",
//     title: "Футбольна секція розпочинає набір на сезон 2025/26",
//     image: "https://picsum.photos/seed/6/800/600",
//     category: "Футбол",
//     date: "05.03.2025",
//   },
// ];

export default function Home() {
  const [tab, setTab] = useState();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    try {
      const data = await getNews();

      const mapped = data.map((item) => ({
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        category: item.categories.map((id) => CATEGORY_MAP[id]).filter(Boolean),
        date: new Date(item.date).toLocaleDateString("uk-UA"),
      }));

      setNews(mapped);
    } catch (e) {
      console.error("Error fetching news:", e);
    } finally {
      setLoading(false);
    }
  }

  const visible = useMemo(() => {
    if (!tab) return news.slice(0, 6);
    return news.filter((n) => n.category?.includes(tab)).slice(0, 6);
  }, [news, tab]);

  // const visible = useMemo(() => {
  //   const list = ALL_NEWS.filter((n) => n.category.includes(tab));
  //   return list.slice(0, 6); // як на макеті – 6 карток
  // }, [tab]);

  return (
    <>
      <section className="relative overflow-hidden flex justify-center">
        {/* Банер для мобільних */}
        <img
          src={heroBannerMob}
          alt="ДЮСШ Вараш — банер мобільний"
          className="object-contain h-auto w-[140%] sm:hidden max-w-none transition-all duration-700 ease-in-out"
        />

        {/* Банер для більших екранів */}
        <img
          src={heroBanner}
          alt="ДЮСШ Вараш — банер"
          className="object-contain h-auto w-[125%] lg:w-full hidden sm:block max-w-none transition-all duration-700 ease-in-out"
        />
      </section>

      {/* Актуальні новини */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-[100px] xl:px-[140px] mt-[40px] md:mt-[60px]">
        <h2 className="font-montserrat font-semibold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] mb-3">
          Актуальні новини
        </h2>

        {/* Вкладки */}
        <div className="flex justify-center gap-3 flex-wrap mb-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg border font-medium transition-colors duration-200 text-[12px] sm:text-[15px] ${
                tab === t
                  ? "bg-[#006d63] text-white border-[#006d63]" // активна вкладка
                  : "bg-[#E9EFF1] text-gray-800 border-transparent hover:bg-[#006d63] hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Сітка карток (NewsCard) */}
        {loading ? (
          <div className="text-center py-10">Завантаження...</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>

            {/* Посилання праворуч*/}
            <div className="font-montserrat font-semibold text-[18px] text-[#005960] mt-4 text-right ">
              <Link to="/новини" className="hover:underline">
                Всі новини
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
