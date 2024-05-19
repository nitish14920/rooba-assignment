import { Button } from "antd";
import React from "react";

const RightSection = () => {
  return (
    <div className="rightSection">
      <div style={{ marginTop: "40px", marginBottom: "60px" }}>
        <h2>Explore youre First</h2>
        <h2>Event</h2>
      </div>
      <h2>Event Name</h2>
      <p>Venue 04/3/2024</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into
      </p>
      <p>Artist Lineup</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30vh",
          alignItems: "center",
        }}
      >
        <img src="image1.png" alt="" height={"150px"} />
      </div>

      <div className="rightFooter">
        <img height={100} src="LinkedinQR.png" alt="linkedin" />
        <Button type="primary">Join Waitlist</Button>
      </div>
    </div>
  );
};

export default RightSection;
