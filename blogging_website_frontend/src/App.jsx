import { Snowfall } from "frost-react";

import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Main from "./pages/mainPage";

import News from "./news/news";
import NewsItem from "./news/newItem";

import AboutUs from "./pages/aboutUs";
import CoachVolley from "./pages/coaches/coachVolley";
import CoachFoot from "./pages/coaches/coachFoot";
import CoachBasket from "./pages/coaches/coachBasket";
import CoachJudo from "./pages/coaches/coachJudo";
import ClassSchedule from "./pages/classSchedule";

import StatuteDUSH from "./pages/informationTransparency/information_statuteDUSH";
import Rules from "./pages/informationTransparency/information_rules";
import PeopleWithSpecialNeeds from "./pages/informationTransparency/peopleSpecialNeeds";
import EducationalProgram from "./pages/informationTransparency/educationalProgram";
import TrainingPrograms from "./pages/informationTransparency/trainingPrograms";
import LanguageAndPayment from "./pages/informationTransparency/languageAndpayment";
import DirectorReport from "./pages/informationTransparency/directorReport";
import Report5FC from "./pages/informationTransparency/report5FC";
import NumberOfStudents from "./pages/informationTransparency/numberOfStudents";
import ConditionsForAdmission from "./pages/informationTransparency/conditionsForAdmission";
import Vacancies from "./pages/informationTransparency/vacancies";
import StructureManagement from "./pages/informationTransparency/structureManagement";

import Estimates2025 from "./pages/budget/estimates2025";
import FundsAnalysis from "./pages/budget/fundsAnalysis";

import NormativeDocuments from "./pages/bullying/normativeDocuments";
import AntibullyingPlan from "./pages/bullying/antibullyingPlan";
import ReportBullyingProcedure from "./pages/bullying/reportBullyingProcedure";
import ResponseBullyingProcedure from "./pages/bullying/responseBullyingProcedure";
import BullyingBehaviorSigns from "./pages/bullying/bullyingBehaviorSigns";
import HowToHandleBullying from "./pages/bullying/howToHandleBullying";
import BullyingOrNot from "./pages/bullying/bullyingOrNot";
import Cyberpes from "./pages/bullying/cyberpes";

import Contacts from "./pages/contacts";

import EnrollToSchool from "./pages/enrollToSchool";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Snowfall />
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />

        <Route path="/новини" element={<News />} />
        <Route path="/новини/:slug" element={<NewsItem />} />

        <Route path="/про-нас" element={<AboutUs />} />
        <Route path="/тренери-волейбол" element={<CoachVolley />} />
        <Route path="/тренери-футбол" element={<CoachFoot />} />
        <Route path="/тренери-баскетбол" element={<CoachBasket />} />
        <Route path="/тренери-дзюдо" element={<CoachJudo />} />
        <Route path="/розклад-занять" element={<ClassSchedule />} />

        <Route
          path="/інформаційнаПрозорість-статус"
          element={<StatuteDUSH />}
        />
        <Route path="/інформаційнаПрозорість-правила" element={<Rules />} />
        <Route
          path="/інформаційнаПрозорість-людиЗОсобливимиПотребами"
          element={<PeopleWithSpecialNeeds />}
        />
        <Route
          path="/інформаційнаПрозорість-освітняПрограма_на_24-25"
          element={<EducationalProgram />}
        />
        <Route
          path="/інформаційнаПрозорість-навчальніПрограми"
          element={<TrainingPrograms />}
        />
        <Route
          path="/інформаційнаПрозорість-мова_та_оплата"
          element={<LanguageAndPayment />}
        />
        <Route
          path="/інформаційнаПрозорість-звітДиректора"
          element={<DirectorReport />}
        />
        <Route path="/інформаційнаПрозорість-звіт5ФК" element={<Report5FC />} />
        <Route
          path="/інформаційнаПрозорість-кількістьВихованців"
          element={<NumberOfStudents />}
        />
        <Route
          path="/інформаційнаПрозорість-умовиВступу"
          element={<ConditionsForAdmission />}
        />
        <Route
          path="/інформаційнаПрозорість-вакансії"
          element={<Vacancies />}
        />
        <Route
          path="/інформаційнаПрозорість-cтруктура-та-органи-управління"
          element={<StructureManagement />}
        />

        <Route
          path="/прозорийБюджет-розрахунок-видатків-на-2025"
          element={<Estimates2025 />}
        />
        <Route
          path="/прозорийБюджет-аналіз-використання-коштів"
          element={<FundsAnalysis />}
        />

        <Route
          path="/стопБулінг-нормативні-документи"
          element={<NormativeDocuments />}
        />
        <Route path="/стопБулінг-план-заходів" element={<AntibullyingPlan />} />
        <Route
          path="/стопБулінг-порядок-подання-заяв-про-випадки-булінгу"
          element={<ReportBullyingProcedure />}
        />
        <Route
          path="/стопБулінг-порядок-реагування-на-доведені-випадки-булінгу"
          element={<ResponseBullyingProcedure />}
        />
        <Route
          path="/стопБулінг-як-знущання-проявляються-на-поведінці-дитини"
          element={<BullyingBehaviorSigns />}
        />
        <Route
          path="/стопБулінг-як-реагувати-на-цькування"
          element={<HowToHandleBullying />}
        />
        <Route path="/стопБулінг-булінг-чи-ні" element={<BullyingOrNot />} />
        <Route path="/стопБулінг-чат-бот-Кіберпес" element={<Cyberpes />} />

        <Route path="/контакти" element={<Contacts />} />
        <Route path="/запис-до-школи" element={<EnrollToSchool />} />
      </Route>
    </Routes>
  );
};

export default App;
