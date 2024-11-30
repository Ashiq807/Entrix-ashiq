import { Outlet } from "react-router-dom";

import "./View.css";

const View = () => {
  return (
    <>
      <div className="col-md-10 screen h-100">
        <div className="container mt-3 h-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default View;
