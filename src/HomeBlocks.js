import React from "react";
import ReactBodymovin from "react-bodymovin";
import logo from "./icons/blood.json";
import logo2 from "./icons/logo.json";
import "./css/HomeBlocks.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
library.add(faStroopwafel);
library.add(faMobile);
library.add(faMobileAlt);

const Icons = () => {
  const iconOne = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: logo
  };
  const iconTwo = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: logo2
  };

  return (
    <div className="HomeBlocks">
      <div className="IconAndText">
        <div className="BlockIcon">
          <div className="FaIcon">
            <FontAwesomeIcon icon="mobile" />
          </div>
        </div>
        <p>Mobile Apps</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <div className="FaIcon">
            <FontAwesomeIcon icon="stroopwafel" />
          </div>
        </div>
        <p>SEO </p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconOne} />
        </div>
        <p>Mobile Apps</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconOne} />
        </div>
        <p>Web Apps </p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconTwo} />
        </div>
        <p>Mobile Apps</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconOne} />
        </div>
        <p>Web Apps </p>
      </div>
    </div>
  );
};

export default Icons;
