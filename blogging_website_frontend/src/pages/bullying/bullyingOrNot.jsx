import Breadcrumb from "../../components/breadCrumb";
import photo1 from "../../imgs/BullyingOrNot.png";

export default function BullyingBehavior() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 text-justify leading-relaxed">
        <h1 className="text-2xl font-semibold mb-4">
          Булінг чи ні?
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src={photo1}
            alt="Прояви булінгу серед дітей"
            className="w-full max-w-[700px] rounded-lg shadow-md"
          />
        </div>
      </main>
    </>
  );
}
