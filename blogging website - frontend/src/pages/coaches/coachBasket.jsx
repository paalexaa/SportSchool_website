import coach1 from "../../imgs/Сус.jpg";
import Breadcrumb from "../../components/breadCrumb"

const COACHES = [
  {
    id: 1,
    photo: coach1,
    name: "Віктор Валентинович СУС",
    title: "тренер-викладач І категорії, директор ДЮСШ Вараської міської ради",
    intro: "Працює в спортивній школі з 2006 року, на посаді директора – з 2007 року.",
    lines: [
      "Проводить навчально-тренувальні заняття з групами дівчат.",
      "Група № 1 початкової підготовки першого року навчання, дівчата 2009–2010 років народження.",
      "Група № 2 початкової підготовки першого року навчання, дівчата 2007–2008 років народження.",
    ],
    note:
      "Вихованки Віктора Валентиновича входять до складу команд збірної області та беруть участь у чемпіонаті України серед своїх вікових категорій. Підготував призерів чемпіонатів області, а також призерів і двох чемпіонок Всеукраїнської юнацької баскетбольної ліги.",
  },
];


export default function coachBasket() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full max-w-none mx-auto px-5 sm:px-10 md:px-16 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Тренери-викладачі відділення баскетболу
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
