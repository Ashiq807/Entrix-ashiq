import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="form-outer">
          <form>
            <div className="input-group">
              <span className="input-group-text bg-transparent border-0">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 shadow-none ps-0"
                placeholder="Enter your search request..."
                aria-label="Search"
              />
            </div>
          </form>
        </div>
        <div>
          <FontAwesomeIcon icon={faSliders} rotation={90} className="me-3 clickable" />
          <button className="btn btn-danger">Go to Premium</button>
        </div>
      </div>
    </>
  );
};

export default Header;
