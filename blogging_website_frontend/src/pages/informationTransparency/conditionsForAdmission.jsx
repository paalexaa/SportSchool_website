import Breadcrumb from "../../components/breadCrumb";

export default function AdmissionConditions() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Умови вступу до ДЮСШ
          </h1>
        </header>

        <div className="text-[16px] md:text-[17px] leading-8 space-y-3">
          {/* Вступ */}
          <p>
            До спортивної школи приймаються всі особи, що бажають займатися фізичною культурою і спортом,
            які виконали нормативи з фізичної підготовленості, встановлені навчальними програмами з видів спорту,
            та не мають медичних протипоказань.
          </p>

          {/* Підстава для зарахування */}
          <p className="font-semibold mt-4">Зарахування здійснюється на підставі:</p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Заяви батьків або осіб, що їх заміняють;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Медичного висновку лікаря поліклініки за місцем проживання про відсутність медичних протипоказань для занять;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Копії свідоцтва про народження та ідентифікаційного коду.
          </p>

          {/* Мінімальний вік */}
          <p className="mt-4">
            Мінімальний вік дитини, що підлягає зарахуванню до спортивної школи, залежить від специфіки виду спорту,
            положення про ДЮСШ та визначається Мінсім’ямолодьспортом за погодженням з МОЗ.
          </p>

          {/* Вік набору за видами спорту */}
          <p className="font-semibold mt-4">Набір на відділення здійснюється за віком:</p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Баскетбол — з 8 років
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Волейбол — з 8 років
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Дзюдо — з 6 років
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Футбол — з 6 років
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Боротьба греко-римська — з 6 років
          </p>

          {/* Переведення між групами */}
          <p className="mt-4">
            Переведення вихованців ДЮСШ із групи початкової підготовки до групи базової підготовки,
            групи спеціалізованої підготовки та до групи вищих досягнень здійснюється після виконання
            встановлених вимог, зазначених у навчальній програмі з видів спорту. Вихованці, які досягли 18 років,
            залишаються в ДЮСШ за наявності позитивної динаміки показників підготовленості та високих спортивних результатів.
          </p>

          {/* Права вихованців */}
          <p className="font-semibold mt-6">Вихованці ДЮСШ мають право:</p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            На безпечні та нешкідливі умови навчання;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Користування спортивною та оздоровчою базою;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Участь у різних видах навчально-тренувальної роботи, змаганнях та інших заходах;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Вільне вираження поглядів, переконань, захист від будь-яких форм експлуатації, психічного і фізичного насильства;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Отримання свідоцтва про закінчення ДЮСШ та особистої картки спортсмена.
          </p>

          {/* Обов'язки вихованців */}
          <p className="font-semibold mt-6">Вихованці ДЮСШ зобов’язані:</p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Удосконалювати та підвищувати свою майстерність;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Виконувати навчально-тренувальні навантаження для досягнення запланованих спортивних результатів;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Брати участь у змаганнях та навчально-тренувальних зборах за індивідуальними та календарними планами;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Дотримуватися встановленого спортивного режиму та особистої гігієни;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Виконувати інші обов’язки, передбачені чинним законодавством.
          </p>

          {/* Права батьків */}
          <p className="font-semibold mt-6">Батьки вихованців (або особи, що їх заміняють) мають право:</p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Обирати і бути обраними до батьківського комітету ДЮСШ;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Звертатися до органів управління фізичною культурою і спортом, директора;
          </p>
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Брати участь у заходах для поліпшення організації навчально-тренувального процесу та зміцнення матеріально-технічної бази ДЮСШ.
          </p>
        </div>
      </main>
    </>
  );
}
