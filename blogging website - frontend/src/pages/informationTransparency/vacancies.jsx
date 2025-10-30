// src/pages/docs/Vacancies.jsx
import Breadcrumb from "../../components/breadCrumb";

export default function Vacancies() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const date = `${dd}.${mm}.${yyyy}`;

  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold mb-6">
              Інформація про наявність вакантних посад
            </h1>
          </header>

          <p className="text-[16px] md:text-[17px] leading-9">
            <strong>Станом на {date}</strong> у Дитячо-юнацькій спортивній школі
            вакантна посада <strong>лікаря</strong> (0,5 ставки).
          </p>

          <p className="text-[16px] md:text-[17px] leading-9 mt-4">
            Також <strong>станом на {date}</strong> наявні вакантні
            <strong> 60 годин</strong> тренера-викладача з
            <strong> волейболу, баскетболу, дзюдо</strong>.
          </p>

          <p className="text-sm text-gray-500 mt-6">
            За деталями звертайтесь до адміністрації ДЮСШ:&nbsp;
            тел.{" "}
            <a href="tel:+380363623768" className="underline text-[#0b5e62]">
              (03636) 2-37-68
            </a>{" "}
            або e-mail{" "}
            <a
              href="mailto:dyssh_varash@ukr.net"
              className="underline text-[#0b5e62]"
            >
              dyssh_varash@ukr.net
            </a>.
          </p>
      </main>
    </>
  );
}
