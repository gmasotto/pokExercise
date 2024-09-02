import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import PageNotFound from "./pages/pageNotfound/PageNotFound";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
