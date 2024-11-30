import SimpleBar from "simplebar-react";

import "simplebar-react/dist/simplebar.min.css";
import Header from "../components/Header";
import Recipe from "../components/Recipe";
import "./Recipes.css";

const Recipes = () => {
  return (
    <>
      <div className="vh-100 d-flex flex-column">
        <Header />
        <SimpleBar style={{ flex: 1, maxHeight: "100%" }}>
          <div className="row g-md-4 g-0 recipe-mob">
            <Recipe rating={4} />
            <Recipe rating={5} />
            <Recipe rating={2} />
            <Recipe rating={3} />
            <Recipe rating={4} />
            <Recipe rating={5} />
            <Recipe rating={2} />
            <Recipe rating={3} />
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default Recipes;
