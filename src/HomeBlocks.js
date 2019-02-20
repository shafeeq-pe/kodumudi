import React from "react";
import ReactBodymovin from "react-bodymovin";
import logo from "./icons/blood.json";
import logo2 from "./icons/logo.json";
import "./css/HomeBlocks.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faMobileAlt,
  faMobile,
  faNewspaper,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);
library.add(faMobileAlt);
library.add(faMobile);
library.add(faCalendarAlt);
library.add(faNewspaper);

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
            <FontAwesomeIcon icon="newspaper" />
          </div>
        </div>
        <p>News</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <div className="FaIcon">
            <FontAwesomeIcon icon="stroopwafel" />
          </div>
        </div>
        <p>Members </p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <div className="FaIcon">
            <FontAwesomeIcon icon="calendar-alt" />
          </div>
        </div>
        <p>Events</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconOne} />
        </div>
        <p>Blood Bank</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <div className="FaIcon">
            <FontAwesomeIcon icon="mobile-alt" />
          </div>
        </div>
        <p>Contact</p>
      </div>

      <div className="IconAndText">
        <div className="BlockIcon">
          <ReactBodymovin options={iconTwo} />
        </div>
        <p>Web Apps </p>
      </div>
    </div>
  );
};

export default Icons;
