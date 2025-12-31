import NewsCard from "../src/components/newsCard";

const samples = [
  {
    _id: "1",
    title: "Опитування з питань освітнього процесу в дитячих спортивних клубах",
    excerpt: "Короткий опис новини для прев'ю. Перевірка двох рядків…",
    image: "https://picsum.photos/seed/1/800/450",
    category: "Новини",
    date: "11.04.2025",
    slug: "opituvannya",
  },
  {
    _id: "2",
    title: "Юні волейболісти вибороли срібло чемпіонату області",
    excerpt: "Ще трохи тексту для перевірки переносу.",
    image: "https://picsum.photos/seed/2/800/450",
    category: "Волейбол",
    date: "24.03.2025",
    slug: "voleibol-sriblo",
  },
  {
    _id: "3",
    title: "Картка без зображення (перевіряємо верстку)",
    excerpt: "",
    image: "",
    category: "Оголошення",
    date: "20.03.2025",
    slug: "no-image",
  },
  {
    _id: "4",
    title: "Дуже довга назва новини щоб перевірити обрізання заголовка на двох рядках",
    excerpt:
      "І довший опис, щоб подивитись як працює обрізання тексту в картці. Має виглядати акуратно.",
    image: "https://picsum.photos/seed/4/800/450",
    category: "Баскетбол",
    date: "18.03.2025",
    slug: "long-title",
  },
  {
    _id: "5",
    title: "Дзюдоїсти провели відкрите тренування",
    excerpt: "Коротко про подію.",
    image: "https://picsum.photos/seed/5/800/450",
    category: "Дзюдо",
    date: "12.03.2025",
    slug: "dzyudo-open",
  },
  {
    _id: "6",
    title: "Футбольна секція розпочинає набір",
    excerpt: "Діти 2012–2016 р.н. — ласкаво просимо!",
    image: "https://picsum.photos/seed/6/800/450",
    category: "Футбол",
    date: "05.03.2025",
    slug: "futbol-nabir",
  },
];

export default function CardGallery() {
  return (
    <section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {samples.map((it) => (
          <NewsCard key={it._id} item={it} />
        ))}
      </div>
    </section>
  );
}
