// src/pages/docs/Admission.jsx
import Breadcrumb from "../components/breadCrumb";

export default function Admission() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat">
        <h1 className="text-3xl font-semibold mb-8">Умови вступу</h1>

        <section className="grid md:grid-cols-2 gap-10 items-start">
          {/* --- ЛІВА ЧАСТИНА: текст + таблиця --- */}
          <div className="text-justify leading-8 text-[17px] space-y-5">
            <p>
              До спортивної школи приймаються всі <strong>діти</strong>, що бажають займатися фізичною культурою і спортом, 
              які виконали нормативи з фізичної підготовленості, встановлені навчальними програмами з видів спорту, 
              та не мають медичних протипоказань.
            </p>

            <p>
              <strong>Зарахування до спортивної школи здійснюється на підставі:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Заяви батьків або осіб, що їх заміняють;</li>
              <li>Медичного висновку лікаря поліклініки за місцем проживання про відсутність медичних протипоказань для занять;</li>
              <li>Копії свідоцтва про народження та ідентифікаційного коду.</li>
            </ul>

            <p>
              Мінімальний вік дитини, що підлягає зарахуванню до спортивної школи, залежить від специфіки виду спорту 
              та визначається Міністерством молоді та спорту України за погодженням із МОЗ.
            </p>

            {/* --- Таблиця --- */}
            <h2 className="text-xl font-semibold mt-8 mb-4">
              Мінімальний вік дитини для набору з видів спорту
            </h2>

            <table className="w-full border border-gray-300 text-[16px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2 text-left font-semibold">
                    Відділення спорту
                  </th>
                  <th className="border border-gray-300 p-2 text-left font-semibold">
                    Вік дитини
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Баскетбол</td>
                  <td className="border border-gray-300 p-2">8 років</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Волейбол</td>
                  <td className="border border-gray-300 p-2">8 років</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Футбол</td>
                  <td className="border border-gray-300 p-2">8 років</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Дзюдо</td>
                  <td className="border border-gray-300 p-2">10 років</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">
              Переведення вихованців ДЮСШ відповідно з групи початкової підготовки до групи базової підготовки, 
              групи спеціалізованої  підготовки та групи до вищих досягнень здійснюється після виконання ними встановлених вимог, 
              зазначених у навчальній програмі з видів спорту. Вихованці, які досягли 18 років, залишаються в ДЮСШ у групах 
              базової підготовки четвертого і п’ятого року навчання, групах спеціалізованої  підготовки та групах підготовки 
              до вищих досягнень за наявності позитивної динаміки показників підготовленості та високих спортивних результатів.
            </p>

            <p>
              <strong>Вихованці ДЮСШ мають право на:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>безпечні та нешкідливі умови навчання;</li>
              <li>користування спортивною та оздоровчою базою;</li>
              <li>участь у різних видах навчально-тренувальної роботи, спортивних змаганнях та інших заходах;</li>
              <li>вільне вираження поглядів, переконань, захист від будь яких форм експлуатації, психічного і фізичного насильства від дій педагогічних та інших працівників, які порушують їх права, принижують честь і гідність;</li>
              <li>отримання свідоцтва про закінчення ДЮСШ та особистої картки спортсмен.</li>
            </ul>
          </div>

          {/* --- ПРАВА ЧАСТИНА: Google Форма --- */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Запис до спортивної школи
            </h2>
            <p className="text-center text-[15px] mb-6">
              Для запису Вашої дитини, будь ласка, заповніть усі поля у формі нижче.
            </p>

            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfvj2fNdJ61BQNY6qa9kNHrD3_0AJzPVK-Ul8zXRbvJsX52Jw/viewform?embedded=true"
                width="100%"
                height="680"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Запис до спортивної школи"
                className="rounded-lg border border-gray-200"
              >
                Завантаження…
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
