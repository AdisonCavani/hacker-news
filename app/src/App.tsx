import { Route, Routes } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NotFound from "./pages/404";
import NewsData from "./pages/news/[page].data";

const News = lazy(() => import("./pages/news/[page]"));

const App: Component = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route
          path={["/news/:page?", "/news", "/"]}
          component={News}
          data={NewsData}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
