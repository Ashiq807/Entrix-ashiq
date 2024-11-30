import Sidebar from "../components/Sidebar";
import View from "../components/View";

const Layout = () => {
  return (
    <div className="container-fluid vh-100" style={{ overflow: "hidden" }}>
      <div className="row h-100">
        <Sidebar />
        <View />
      </div>
    </div>
  );
};

export default Layout;
