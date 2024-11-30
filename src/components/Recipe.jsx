import StarRatings from "react-star-ratings";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./Recipe.css";
import Image from "../assets/th (8).jpeg";

const Recipe = ({ rating }) => {
  return (
    <motion.div
      className="col-lg-3 col-md-4 position-relative wrapper-recipe"
      whileHover={{
        y: -20,
      }}
    >
      <img
        src={Image}
        alt="Recipe"
        className="recipe-img rounded-circle position-absolute"
      />
      <motion.div
        className="bg-white rounded-4 pt-1"
        style={{ transition: "all 0.3s ease-in-out" }}
        whileHover={{
          boxShadow: "0px 1px 10px rgba(255, 0, 0, 0.3)",
        }}
      >
        <h5 className="mt-5">Noodle Chicken</h5>
        <div className="bg-warning d-table mx-auto p-1 px-3 rounded mt-3">
          Intermediate
        </div>
        <div className="row mt-4 m-1">
          <div className="col border-end border-1 border-gray text-center">
            <strong className="fs-3 m-0">25</strong>
            <br />
            <p className="m-0">Min</p>
          </div>
          <div className="col border-end border-1 border-gray">
            <strong className="fs-3 m-0">95</strong>
            <br />
            <p className="m-0">Kcal</p>
          </div>
          <div className="col">
            <strong className="fs-3 m-0">
              <FontAwesomeIcon icon={faLeaf} />
            </strong>
            <br />
            <p className="m-0">Veg</p>
          </div>
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="red"
          numberOfStars={5}
          starDimension="15px"
          name="rating"
          className="star-ratings"
        />
        <motion.div
          className="border-top border-1 border-gray pt-3 pb-3 rounded-bottom-4"
          style={{ cursor: "pointer", transition: "all 0.3s ease-in-out" }}
          whileHover={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          <span className="fs-6">
            <strong>Start cooking</strong>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Recipe;
