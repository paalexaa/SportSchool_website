import Breadcrumb from "../../components/breadCrumb";

export default function Statute() {
  const pdfUrl = "/files/аналіз_використання_коштів.pdf";

  return (
    <>
        <Breadcrumb />

        <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl font-semibold mb-4">Аналіз використання коштів</h1>

        {/* Кнопка завантаження */}
        <a
            href={pdfUrl}
            download
            className="inline-block mb-4 text-[#006d63] underline hover:no-underline"
        >
            Завантажити PDF
        </a>

        {/* Вмонтоване вікно перегляду */}
        <div className="w-full h-[80vh] border rounded shadow-sm overflow-hidden">
            <iframe
            title="Освітня програма ДЮСШ на 2024-2025 н.р."
            src={pdfUrl}
            className="w-full h-full"
            />
        </div>
        </main>
    </>
  );
}

