import logo from "../imgs/logo-removebg.png";

const Footer = () => {
  return (
    <footer className="mt-[20px] bg-[#0b5e62] text-white">
      <div className="h-[3px] w-full bg-white/10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 md:px-12 lg:px-16 xl:px-[120px] py-10">
        {/* --- На середніх екранах (планшет): окремий верхній блок --- */}
        <div className="hidden md:flex lg:hidden flex-col items-center text-center mb-10">
          <img src={logo} alt="logo" className="w-20 h-auto object-contain mb-4"/>
          <p className="text-sm text-white text-[18px] leading-snug mb-4">
            Дитячо-юнацька спортивна школа <br />
            Вараської міської ради <br />
            Рівненської області
          </p>

          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.facebook.com/groups/683268420488216?locale=uk_UA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition"
              title="Facebook"
            >
              <i className="fi fi-brands-facebook text-[20px]" />
            </a>
            <a
              href="https://www.youtube.com/@DUSSH_VARASH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-80 transition"
              title="YouTube"
            >
              <i className="fi fi-brands-youtube text-[20px]" />
            </a>
            <a
              href="https://www.instagram.com/dyssh_varash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
              title="Instagram"
            >
              <i className="fi fi-brands-instagram text-[20px]" />
            </a>
          </div>
        </div>

        {/* --- Основна сітка --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-40">
          {/* Ліва колонка: логотип (для мобільного та desktop, але прихована на планшеті) */}
          <div className="flex flex-col items-center gap-4 text-center md:hidden lg:flex">
            <div className="flex flex-col items-center gap-4">
              <img src={logo} alt="logo" className="w-20 h-auto object-contain"/>
              <p className="text-sm leading-snug text-center text-white md:whitespace-nowrap md:truncate">
                Дитячо-юнацька спортивна школа <br />
                Вараської міської ради <br />
                Рівненської області
              </p>
            </div>
            <div className="flex items-center gap-6 text-2xl mt-2">
              <a
                href="https://www.facebook.com/groups/683268420488216?locale=uk_UA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
                title="Facebook"
              >
                <i className="fi fi-brands-facebook text-[20px]" />
              </a>
              <a
                href="https://www.youtube.com/@DUSSH_VARASH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:opacity-80 transition"
                title="YouTube"
              >
                <i className="fi fi-brands-youtube text-[20px]" />
              </a>
              <a
                href="https://www.instagram.com/dyssh_varash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
                title="Instagram"
              >
                <i className="fi fi-brands-instagram text-[20px]" />
              </a>
            </div>
          </div>

          {/* Середня колонка: Контактна інформація */}
          <div>
            <h3 className="sm:text-lg">
              Контактна інформація
            </h3>
            <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-3 text-sm">
              <dt className="opacity-80">Адреса:</dt>
              <dd className="md:whitespace-nowrap md:truncate">
                м-н Вараш 28А, <br/>
                м. Вараш, Рівненська обл., <br/>
                Україна, 34400
              </dd>
              <dt className="opacity-80">Тел/факс:</dt>
              <dd>
                <a href="tel:+380363623768" className="hover:underline">
                  (03636) 2-37-68
                </a>
              </dd>
              <dt className="opacity-80">E-mail:</dt>
              <dd>
                <a href="mailto:dyssh_varash@ukr.net" className="hover:underline">
                  dyssh_varash@ukr.net
                </a>
              </dd>
            </dl>
          </div>

          {/* Права колонка: Корисні посилання */}
          <div>
            <h3 className="sm:text-lg">
              Корисні посилання
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://mon.gov.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Міністерство освіти і науки України
                </a>
              </li>
              <li>
                <a href="https://mms.gov.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Міністерство молоді та спорту України
                </a>
              </li>
              <li>
                <a href="https://www.varash-rada.gov.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Вараська міська рада
                </a>
              </li>
              <li>
                <a href="https://varashosvita.rv.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Управління освіти виконавчого комітету ВМР
                </a>
              </li>
              <li>
                <a href="https://www.rvosvita.org.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Департамент освіти і науки РОДА
                </a>
              </li>
              <li>
                <a href="https://vmva.rv.gov.ua/" target="_blank" className="hover:underline md:whitespace-nowrap md:truncate" rel="noopener noreferrer">
                  Вараська міська військова адміністрація
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <span className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs opacity-80 flex items-center justify-between text-center sm:text-left flex-wrap gap-2">
          Всі права захищено Дитячо-юнацька спортивна школа ©{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
