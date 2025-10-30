import Breadcrumb from "../../components/breadCrumb";

export default function Statute() {
  const pdfUrl = "/files/5-ФК_2024.pdf";

  return (
    <>
        <Breadcrumb />

        <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl font-semibold mb-4">Звіт 5-ФК за 2024 рік</h1>

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
            title="Статут ДЮСШ"
            src={pdfUrl}
            className="w-full h-full"
            />
        </div>
        </main>
    </>
  );
}

