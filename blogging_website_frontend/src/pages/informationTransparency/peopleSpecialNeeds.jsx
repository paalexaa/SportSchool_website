import Breadcrumb from "../../components/breadCrumb";

export default function PeopleWithSpecialNeeds() {
  return (
    <>
      <Breadcrumb />

      <main className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-[120px] py-10 font-montserrat">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Умови доступності закладу для осіб з особливими потребами
          </h1>
        </header>

        <div className="text-[16px] md:text-[17px] leading-8 space-y-3">
          <p>
            У зв’язку з тим, що Дитячо-юнацька спортивна школа розміщена у нетиповому приміщенні,  позашкільний заклад не може 
            забезпечити умов доступності для навчання осіб з особливими освітніми потребами. Проте, заклад забезпечує умови для 
            навчання дітей з особливими потребами, які можуть пересуватися самостійно або у супроводі дорослих.
          </p>
        </div>
      </main>
    </>
  );
}
