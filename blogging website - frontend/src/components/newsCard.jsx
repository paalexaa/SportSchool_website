import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <Link
      to={`/news/${item.slug}`}
      className="group block rounded-xl border border-[#E9EFF1] bg-white shadow-sm hover:shadow-md focus:outline-none"
    >
      {/* верхній відступ і «рамка» навколо зображення як на макеті */}
      <div className="p-3">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-[4/3] object-cover rounded-lg"
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-lg bg-gray-100" />
        )}
      </div>

      <div className="px-4 pb-4">
        {/* категорія + дата */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {(Array.isArray(item.category) ? item.category : [item.category]).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold text-white"
                style={{ backgroundColor: "#0b5e62" }}
              >
                {cat}
              </span>
            ))}
          </div>
          <time className="text-[12px] text-gray-700">{item.date}</time>
        </div>

        {/* заголовок у верхньому регістрі з обрізанням на 2 рядки */}
        <h3
          className="mt-3 font-montserrat font-bold text-[14px] leading-snug uppercase tracking-[0.02em] text-black"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
