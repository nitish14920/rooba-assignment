import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

function Dashboard() {
  return (
    <div className="flex-row">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Dashboard;
