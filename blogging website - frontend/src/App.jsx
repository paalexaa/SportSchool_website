
import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Main from "./pages/mainPage";

import CardGallery from "./CardGallery"

function Layout() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/main" element={<Main />} />
                {/* <Route path="про-нас" element={<h1>aboutUs</h1>} /> */}
            </Route>
        </Routes>
    )
}

export default App;