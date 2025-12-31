import Breadcrumb from "../../components/breadCrumb";

export default function NumberOfStudents() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10">
        {/* Заголовок */}
        <header className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">
            Відділення та кількість вихованців, які займаються у ДЮСШ
        </h1>
        </header>

        {/* Контент */}
         <div className="text-[16px] md:text-[17px] leading-8 space-y-3">
          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Відділення баскетболу — <strong>2 групи</strong>, <strong>28 вихованців</strong>.
          </p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Відділення греко-римської боротьби — <strong>2 групи</strong>, <strong>23 вихованців</strong>.
          </p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Відділення волейболу — <strong>8 груп</strong>, <strong>127 вихованців</strong>.
          </p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Відділення дзюдо — <strong>1 група</strong>, <strong>14 вихованців</strong>.
          </p>

          <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-[#0b5e62]">
            Відділення футболу — <strong>10 груп</strong>, <strong>160 вихованців</strong>.
          </p>

          <p className="pt-2 text-gray-700">
            Разом: <strong>23 групи</strong>, <strong>352 вихованців</strong>.
          </p>
        </div>
      </main>
    </>
  );
}
