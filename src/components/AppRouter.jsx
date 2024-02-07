import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Counter from "./Counter";

import Nav from "./Nav";
import Home from "./Home";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
