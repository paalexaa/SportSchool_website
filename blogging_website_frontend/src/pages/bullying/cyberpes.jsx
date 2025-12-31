import Breadcrumb from "../../components/breadCrumb";
import photo1 from "../../imgs/kiberpes.jpg";

export default function Cyberpes() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 text-justify leading-relaxed">
        <h1 className="text-2xl font-semibold mb-4">
          Чат-бот “Кіберпес” для боротьби з кібербулінгом
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src={photo1}
            alt="Прояви булінгу серед дітей"
            className="w-full max-w-[600px] rounded-lg shadow-md"
          />
        </div>

        <p className="mb-4">
          В Україні запустили <strong>чат-бота “Кіберпес”</strong> у {" "}
          <a
            href="https://t.me/kiberpes_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5e62] hover:underline"
          >
            Telegram
          </a> і {" "}
          <a
            href="https://chats.viber.com/kiberpes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5e62] hover:underline"
          >
            Viber
          </a>.
          <br />
          “Кіберпес” допоможе дізнатись, як визначити кібербулінг, як самостійно видалити образливі матеріали з соціальних мереж, а також куди звертатись за допомогою.
          <br />
          Бота розробило Міністерство цифрової трансформації у співпраці з ЮНІСЕФ.
        </p>

        <p className="mb-6">
          У чат-боті “Кіберпес” можна знайти інформацію про таке:
        </p>

        <ul className="list-decimal list-inside space-y-3 mb-6">
          <li>що таке «кібербулінг» та як він проявляється;</li>
          <li>як визначити контент, що містить кібербулінг;</li>
          <li>що робити, якщо вас кібербулять;</li>
          <li>як видалити матеріали, що містять кібербулінг;</li>
          <li>як попередити кібербулінг;</li>
          <li>як не бути кібербулером.</li>
        </ul>

        <p className="mb-6">
          Кібербулінг – це цькування із застосуванням цифрових технологій. Кібербулінг може відбуватися в соціальних мережах, 
          платформах обміну повідомленнями (месенджерах), ігрових платформах та мобільних телефонах, зокрема через: 
        </p>

        <ul className="list-decimal list-inside space-y-3 mb-6">
          <li>поширення брехні або розміщення фотографій, які компрометують когось у соціальних мережах;</li>
          <li>повідомлення або погрози, які ображають когось або можуть завдати комусь шкоди.</li>
        </ul>

      </main>
    </>
  );
}
