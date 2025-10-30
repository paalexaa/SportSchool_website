// src/pages/docs/ManagementStructure.jsx
import Breadcrumb from "../../components/breadCrumb";

export default function ManagementStructure() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat">
        <header className="mb-6">
        <h1 className="text-2xl font-semibold mb-6">
            Структура та органи управління
        </h1>
        </header>

        {/* Контент */}
         <div className="text-[16px] md:text-[17px] leading-8 space-y-3">
          <p className="md-6">
            Відповідно до Статуту Дитячо-юнацької спортивної школи Вараської міської ради Рівненської області, затвердженого рішенням сесії Вараської 
            міської ради від 28.11.2017 №879
          </p>

          <p className="md-6">
            Безпосереднє керівництво ДЮСШ здійснює директор, який призначається на посаду (звільняється з посади) начальником управління освіти 
            виконавчого комітету Вараської міської ради  відповідно до законодавства.
          </p>

          <p className="md-6">
            На посаду директора ДЮСШ призначається особа, яка є громадянином України, має вищу освіту за спеціальністю фізична культура і спорт 
            та ступенем “магістр”, стаж роботи за фахом не менш як три роки та має організаторські здібності, фізичний и психологічний стан якої 
            не перешкоджає виконанню професійних обов’язків.
          </p>

          <p className="md-6">
            З метою забезпечення розвитку та удосконалення навчально-тренувальної та спортивної роботи, професійної діяльності працівників у ДЮСШ 
            створюється тренерська рада, яку очолює її директор.
          </p>

          <p className="md-6">
            Тренерська рада ДЮСШ:
          </p>
          <ul className="space-y-2">
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            вивчає плани, результати та актуальні питання навчально-тренувальної та спортивної роботи у школі, розглядає питання 
            організації роботи відділень, комплектування груп, додержання санітарно-гігієнічних вимог, забезпечення техніки безпеки, 
            охорони праці тощо;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            розробляє пропозиції щодо поліпшення діяльності спортивної школи;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            визначає заходи щодо підвищення кваліфікації кадрів, упровадження під час навчально-тренувальних занять досягнень науки і 
            кращого досвіду роботи;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            розробляє рекомендації з питань удосконалення навчально-тренувальної та спортивної роботи;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            вносить керівництву спортивної школи пропозиції щодо налагодження міжнародних спортивних зв’язків;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            захищає права працівників на виявлення ініціативи, вільний вибір форм, методів і засобів навчання, аналізує форми, методи 
            і засоби навчання та скасовує такі, що не придатні для використання під час проведення навчально-тренувальної та спортивної роботи;</li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            розглядає інші питання, пов’язані з діяльністю спортивної школи.</li>
        </ul>

          <p className="md-6">
            Засідання тренерської ради ДЮСШ проводяться у разі потреби, але не рідше одного разу на два місяці.
          </p>

          <p className="md-6">
            Органом громадського самоврядування ДЮСШ є загальні збори  колективу, в яких можуть брати участь наукові та інші працівники, які 
            залучаються до навчально-тренувальної та спортивної роботи, і представники батьківського комітету. Загальні збори колективу ДЮСШ 
            скликаються не рідше одного разу на рік.
          </p>
        </div>
      </main>
    </>
  );
}
