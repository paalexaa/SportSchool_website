import coach1 from "../../imgs/Малець.jpg";
import coach2 from "../../imgs/Стасюк.jpg";
import coach3 from "../../imgs/Козлинець.jpg";
import Breadcrumb from "../../components/breadCrumb"

const COACHES = [
  {
    id: 1,
    photo: coach1,
    name: "Іван Григорович МАЛЕЦЬ",
    title: "тренер-викладач ІІ категорії",
    intro: "Почав працювати в спортивній школі з 1989 р.",
    lines: [
      "Із 2004 р. працює з групами юнаків.",
      "Група № 1 базової підготовки четвертого року навчання, юнаки 2009 року народження.",
      "Група № 2 базової підготовки четвертого року навчання, юнаки 2010 року народження.",
    ],
    note: 
      "Вихованці Івана Григоровича – переможці та призери обласних чемпіонатів, усеукраїнських і міжнародних турнірів, учасники Дитячо-юнацької футбольної ліги України.",
  },
  {
    id: 2,
    photo: coach2,
    name: "Вікторія Борисівна СТАСЮК",
    title: "тренер-викладач ІІ категорії",
    intro: "Працює в спортивній школі з 2015 р. з групами юнаків і дівчат.",
    lines: [
      "Група № 1 початкової підготовки третього року навчання, юнаки 2012 року народження.",
      "Група № 2 початкової підготовки третього року навчання, дівчата 2008 року народження.",
      "Група № 3 початкової підготовки першого року навчання, дівчата 2012 року народження.",
    ],
  },
  {
    id: 3,
    photo: coach3,
    name: "Олександра Василівна КОЗЛИНЕЦЬ",
    title: "тренер-викладач без категорії",
    intro: "Працює в спортивній школі з 2023 р. з групами початкової підготовки юнаків 2013-2016 рр.н. та з групою базової підготовки юнаків 2010-2011 рр.н..",
    lines: [],
  },
];


export default function coachFoot() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full max-w-none mx-auto px-5 sm:px-10 md:px-16 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Тренери-викладачі відділення футболу
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
