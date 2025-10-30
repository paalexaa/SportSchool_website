import Breadcrumb from "../components/breadCrumb";
import schedule from "../imgs/розклад.jpg"

export default function About() {
  return (
    <>
      <Breadcrumb />
      <div className="w-full max-w-none mx-auto px-5 sm:px-10 md:px-16 lg:px-[120px] py-8">
        <img
            src={schedule} alt={"розклад"} className="w-full h-auto object-cover rounded shadow"
        />
      </div>
    </>
  );
}
