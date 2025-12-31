import Breadcrumb from "../../components/breadCrumb";

const PROGRAMS = [
  { title: "Навчальна програма з волейболу",            url: "/files/programs/volleyball.pdf" },
  { title: "Навчальна програма з дзюдо",                url: "/files/programs/judo.pdf" },
  { title: "Навчальна програма з футболу",              url: "/files/programs/football.pdf" },
  { title: "Навчальна програма з баскетболу",           url: "/files/programs/basketball.pdf" },
  { title: "Навчальна програма з греко-римської боротьби", url: "/files/programs/greco-romanStruggle.pdf" },
  { title: "Зміни до програми",                         url: "/files/programs/changes.pdf" },
];

export default function TrainingPrograms() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-8">
        <h1 className="text-2xl font-semibold mb-6">Навчальні програми</h1>

        <ul className="rounded-md border border-gray-200 bg-white">
          {PROGRAMS.map((p, i) => (
            <li
              key={p.title}
              className={`flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-5 py-5 ${
                i !== PROGRAMS.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="text-[16px] leading-6">{p.title}</span>

              <div className="flex items-center gap-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006d63] underline hover:no-underline inline-flex items-center gap-2"
                >
                  відкрити посилання у новій вкладці
                  <i className="fi fi-rr-arrow-up-right-from-square text-[14px]" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

