import coach1 from "../../imgs/Дробиленко.jpg";
import coach2 from "../../imgs/Мельник.jpg";
import coach3 from "../../imgs/Байрук.jpg";
import Breadcrumb from "../../components/breadCrumb"

const COACHES = [
  {
    id: 1,
    photo: coach1,
    name: "Олег Андрійович ДРОБИЛЕНКО",
    title: "тренер-викладач І категорії відділення волейболу",
    lines: [
      "Проводить заняття з групами юнаків і дівчат.",
      "Група № 1 базової підготовки другого року навчання, дівчата 2008 року народження.",
      "Група № 2 базової підготовки першого року навчання, юнаки 2008 року народження.",
      "Група № 3 початкової підготовки другого року навчання, дівчата 2010 року народження.",
      "Група № 4 початкової підготовки другого року навчання, дівчата 2012 року народження і молодші.",
    ],
    note:
      "Перший тренер чемпіонки України у вищій лізі Анастасії Згурської.",
  },
  {
    id: 2,
    photo: coach2,
    name: "Віталій Іванович МЕЛЬНИК (сумісник)",
    title: "тренер-викладач",
    lines: [
      "Працює з групами початкової підготовки: дівчата 2013–2014 рр.н. та юнаки 2013–2014 рр.н.",
    ],
  },
  {
    id: 3,
    photo: coach3,
    name: "Юлія Юріївна БАЙРУК (сумісник)",
    title: "тренер-викладач",
    lines: [
      "Працює з групами початкової підготовки: дівчата 2012–2013 рр.н. та юнаки 2012 р.н.",
    ],
  },
];


export default function coachVolley() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full max-w-none mx-auto px-5 sm:px-10 md:px-16 lg:px-[120px] py-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Тренери-викладачі відділення волейболу
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
