import { Routes, Route, Navigate } from "react-router-dom";

import Recipes from "../pages/Recipes";
import Favourites from "../pages/Favourites";
import Courses from "../pages/Courses";
import Community from "../pages/Community";
import Layout from "../pages/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="recipes" />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="courses" element={<Courses />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
