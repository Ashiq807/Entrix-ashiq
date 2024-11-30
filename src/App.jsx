import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./components/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
