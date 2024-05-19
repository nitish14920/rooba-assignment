import React from "react";
import CarouselAutoplay from "./CarouselAutoplay.tsx";
import { Radio, RadioChangeEvent } from "antd";

const LeftSection = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <div className="leftSection">
      <img className="astrixImg" alt="img" src="astrix.png" />
      <h2 className="bgText1 ">ASTE</h2>
      <h2 className="bgText1 oneText">RIX</h2>
      <br />
      <h2 className="bgText2 ">EVE</h2>
      <h2 className="bgText2 twoText">NTS</h2>
      <div className="carouselContainer">
        <CarouselAutoplay />
      </div>

      <div className="radioButtonContainer">
        <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">Events</Radio.Button>
          <Radio.Button value="b">Collections</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default LeftSection;
