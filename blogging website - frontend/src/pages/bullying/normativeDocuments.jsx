import Breadcrumb from "../../components/breadCrumb";

export default function NormativeDocuments() {
  return (
    <>
      <Breadcrumb />
      
      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat text-justify leading-relaxed">
        <h1 className="text-2xl font-semibold mb-4">
          Нормативні документи щодо булінгу
        </h1>

        {/* Список нормативних документів */}
        <div className="space-y-4">
          <p><a href="https://zakon.rada.gov.ua/laws/show/658-2018-%D0%BF/paran12#n12"  target="_blank" className="text-[#0b5e62] underline hover:no-underline">
              Постанова КМУ від 22 серпня 2018 р. N 658 «Про затвердження Порядку взаємодії суб'єктів, що здійснюють заходи у сфері запобігання та протидії домашньому насильству і насильству за ознакою статі»
            </a>
          </p>

          <p>
            <a href="https://mon.gov.ua/npa/pro-zatverdzhennya-metodichnih-rekomendacij-shodo-viyavlennya-reaguvannya-na-vipadki-domashnogo-nasilstva-i-vzayemodiyi-pedagogichnih-pracivnikiv-iz-inshimi-organami-ta-sluzhbami" target="_blank" className="text-[#0b5e62] underline hover:no-underline">
              Наказ МОН України від 02.10.2018 року № 1047 "Про затвердження методичних рекомендацій щодо виявлення, реагування на випадки домашнього насильства і взаємодії із іншими органами та службами"
            </a>
          </p>

          <p>
            <a href="https://zakon.rada.gov.ua/laws/show/2657-19#Text" target="_blank" className="text-[#0b5e62] underline hover:no-underline">
              Закон України «Про внесення змін до деяких законодавчих актів України щодо протидії булінгу (Цкування)» від 19.01.2019
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
