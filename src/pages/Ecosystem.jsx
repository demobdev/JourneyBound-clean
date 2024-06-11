import React, { useEffect } from "react";
import RightContentVideo from "../components/EcosystemRightContentVideo";
import DashBoardAccess from "../components/DashBoardAccess";
import FullWidthSlider from "../components/FullWidthSlider";
import SimpleLogoSection from "../components/SimpleLogoSection";
import EcosystemLeftContentImage from "../components/EcosystemLeftContentImage";
import { useLocation } from "react-router-dom";

function Ecosystem() {

  const  { hash } = useLocation();

  useEffect(() => {
    if(hash) {
      const element = document.querySelector(hash);
        if(element) {
          element.scrollIntoView({ topPosition: 0, behavior: 'smooth' });
        }
    }
  });

  return (
    <>
      <RightContentVideo />
      <SimpleLogoSection />
      <EcosystemLeftContentImage />
      <FullWidthSlider />
      <DashBoardAccess />
    </>
  );
}

export default Ecosystem;
