// src/pages/contacts/Contacts.jsx
import Breadcrumb from "../components/breadCrumb";

export default function Contacts() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-12 font-montserrat">
        <h1 className="text-3xl font-semibold mb-10 text-center">Контакти</h1>

        {/* Контактна секція */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          {/* Ліва частина — інформація */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold mb-3">Адміністрація</h2>
              <p>
                <strong>Директор:</strong> <span className="font-semibold">СУС Віктор Валентинович</span>
              </p>
              <p>
                <strong>Заступник директора з навчально-тренувальної роботи:</strong><br />
                <span className="font-semibold">БОНДАР Олена Петрівна</span> –{" "}
                <a href="mailto:dush_zastypnuk@ukr.net" className="text-[#0b5e62] hover:underline">
                  dush_zastypnuk@ukr.net
                </a>
              </p>
              <p>
                <strong>Заступник директора з адміністративно-господарської роботи:</strong><br />
                <span className="font-semibold">ХАРЕЧКО Ірина Володимирівна</span> –{" "}
                <a href="mailto:zavgosp_dush@ukr.net" className="text-[#0b5e62] hover:underline">
                  zavgosp_dush@ukr.net
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Контактна інформація</h2>
              <p><strong>Адреса:</strong> 34400, Україна, Рівненська обл., м. Вараш, м-н Вараш 28А</p>
              <p><strong>Тел./факс:</strong> <span className="text-red-600">(03636) 2-37-68</span></p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:dyssh_varash@ukr.net" className="text-[#0b5e62] hover:underline">
                  dyssh_varash@ukr.net
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Графік роботи</h2>
              <p><strong>Пн – Пт:</strong> 09:00 – 18:00</p>
              <p><strong>Сб – Нд:</strong> вихідні</p>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.526746848363!2d25.841772615708934!3d51.3546628796104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47261381d28ced59%3A0x68dbf5a78d8c9cdc!2z0JTQvtC70LXQstC10YDRgdC40Y8g0KHQvtCx0LXRgNC90YvQuSDQutC-0LvQsNC90YLRgNCw0LvRjNC90LAg0L7QsdC70L7Qv9C-0LrQsC4!5e0!3m2!1suk!2sua!4v1730253050000!5m2!1suk!2sua"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Мапа місцезнаходження"
            className="rounded-lg shadow-md"
          ></iframe>
          </div>
        </section>        
      </main>
    </>
  );
}
