// src/pages/docs/LanguageAndFees.jsx
import Breadcrumb from "../../components/breadCrumb";

export default function LanguageAndFees() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-8 font-montserrat">
        <h1 className="text-2xl font-semibold mb-6">
          Мова навчання та оплата в ДЮСШ
        </h1>

        <div className="space-y-5">
          <p className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5e62]">
              <i className="fi fi-rr-check text-white text-[12px]" />
            </span>
            <span className="text-[16px] leading-7">
              <span className="font-semibold">Мова навчання і виховання</span>{" "}
              в Дитячо-юнацькій спортивній школі —{" "}
              <span className="font-semibold">українська</span>.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5e62]">
              <i className="fi fi-rr-check text-white text-[12px]" />
            </span>
            <span className="text-[16px] leading-7">
              Навчально-тренувальні заняття для вихованців{" "}
              <span className="font-semibold">проводяться безкоштовно</span>.
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
