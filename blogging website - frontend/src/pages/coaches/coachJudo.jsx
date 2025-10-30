import coach1 from "../../imgs/Бондар.jpg";
import coach2 from "../../imgs/Парейко.jpg";
import Breadcrumb from "../../components/breadCrumb"

const COACHES = [
  {
    id: 1,
    photo: coach1,
    name: "Олена Петрівна БОНДАР",
    title: "тренер-викладач ІІ категорії, заступник директора з навчально-тренувальної роботи.",
    intro: "Працює в спортивній школі з 1996 р.",
    lines: [
      "Проводить заняття з групою початкової підготовки, в якій займаються юнаки та дівчата 2013–2015 років народження.",
    ],
    note:
      "Серед випускників Олени Петрівни – призери та переможці обласних чемпіонатів, учасники всеукраїнських і міжнародних змагань.",
  },
  {
    id: 2,
    photo: coach2,
    name: "Ольга Іванівна ПАРЕЙКО(сумісник)",
    title: "тренер-викладач з дзюдо, кандидат в майстри спорту.",
    intro: "Розпочинала свою тренерську діяльність в спортивній школі ще з 1996 р.",
    lines: [
      "Проводить заняття з групами початкової підготовки, в якій займаються юнаки та дівчата 2017–2018 років народження.",
    ],
    note:
      "Серед випускників Ольги Іванівни – призери та переможці обласних чемпіонатів, учасники всеукраїнських і міжнародних змагань.",
  },
];


export default function coachJudo() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full max-w-none mx-auto px-5 sm:px-10 md:px-16 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Тренери-викладачі відділення дзюдо
        </h1>

        <section className="space-y-8">
          {COACHES.map((c, idx) => (
            <article key={c.id}>
              <div className="grid grid-cols-[120px,1fr] sm:grid-cols-[140px,1fr] gap-5 sm:gap-6 items-start">
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-[120px] sm:w-[140px] h-[150px] sm:h-[170px] object-cover rounded shadow"
                />

                <div className="leading-relaxed text-[15px] sm:text-[16px] text-gray-800">
                  <p className="mb-1">
                    <span className="font-semibold">{c.name}</span> — {c.title}.
                  </p>

                  {c.intro && (
                    <p className="mt-3 font-medium">{c.intro}</p>
                  )}

                  <div className="space-y-1 mt-2">
                    {c.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {c.note && (
                    <p className="mt-3 font-medium">{c.note}</p>
                  )}
                </div>
              </div>

              {/* роздільник між тренерами */}
              {idx !== COACHES.length - 1 && (
                <hr className="mt-6 border-t border-[#005960]" />
              )}
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
