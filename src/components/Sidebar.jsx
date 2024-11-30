import Logo from "../assets/foodo_large-removebg-1024x1024.png";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <>
      <div className="col-md-2 bg-white">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "35%" }}
          className="d-block mx-auto"
        />
        <Navigation />
      </div>
    </>
  );
};

export default Sidebar;
