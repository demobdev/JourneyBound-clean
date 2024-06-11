// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Container, Figure, Image } from "react-bootstrap";
// import CarouselImage1 from "../assets/images/carousel-image-1.png";
// import CarouselImage2 from "../assets/images/carousel-image-2.png";
// import CarouselImage3 from "../assets/images/carousel-image-3.png";
// import TriangleDivider from "../assets/images/triangle-divider-image.png";
// import MoonizenImage from "../assets/images/Moonizen.png";

// const BackgroundImage = {
//   backgroundImage: `url(${MoonizenImage})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "50%",
// };

// const customDivider = {
//   boxShadow: "0px 0px 19px 2px #1898B3",
//   height: "5px",
//   borderRadius: "5px",
//   maxWidth: "620px",
// };

// function FullWidthSlider() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//   };

//   return (
//     <>
//       <section>
//         <div className="pt-5 text-center" style={BackgroundImage}>
//           <Container fluid="lg">
//             <h5 className="head-h5 font-family-AG fw-normal mb-5 text-lg-start">
//               Artistry Meets Psychedelics
//             </h5>
//             <h3 className="head-h3 font-family-Avenir fw-normal mb-5">
//               Merging Creativity, Healing, and Exploration
//             </h3>
//             <h3 className="head-h3 font-family-Avenir fw-normal text-start mb-5">
//               The Atrium has partnered with{" "}
//               <a href="https://moonizenstudios.com/" target="_blank">
//                 Moonizen Studios
//               </a>
//               , home of the{" "}
//               <a href="https://moonizens.com/" target="_blank">
//                 Moonizen Genesis Collection
//               </a>{" "}
//               on Polygon, and harnessed the extraordinary skills of Anthony
//               Stuart infuse life into the JourneyBound Account NFT and Polygenic
//               Journey NFT collections{" "}
//             </h3>
//             <h3 className="head-h3 font-family-Avenir fw-normal mb-4">
//               Every creation is meticulously designed to highlight the
//               therapeutic benefits of psychedelics, offering a curated path for
//               your digital and real world exploration of psychedelic experiences
//             </h3>
//             <div className="divider" style={customDivider}></div>
//           </Container>
//         </div>
//         <div className="p-4">
//           <Slider {...settings} className="deal-slider">
//             <div className="slider-items text-center">
//               <Figure className="mb-0">
//                 <Image src={CarouselImage1} />
//               </Figure>
//             </div>
//             <div className="slider-items text-center">
//               <Figure className="mb-0">
//                 <Image src={CarouselImage2} />
//               </Figure>
//             </div>
//             <div className="slider-items text-center">
//               <Figure className="mb-0">
//                 <Image src={CarouselImage3} />
//               </Figure>
//             </div>
//           </Slider>
//           <div className="triangle-divider-image py-4 text-center">
//             <Image src={TriangleDivider} className="w-100" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default FullWidthSlider;

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Figure, Image } from "react-bootstrap";
import CarouselImage1 from "../assets/images/carousel-image-1.png";
import CarouselImage2 from "../assets/images/carousel-image-2.png";
import CarouselImage3 from "../assets/images/carousel-image-3.png";
import CarouselImage4 from "../assets/images/carousel-image-4.png";
import CarouselImage5 from "../assets/images/carousel-image-5.png";
import CarouselImage6 from "../assets/images/carousel-image-6.png";
import CarouselImage7 from "../assets/images/carousel-image-7.png";
import CarouselImage8 from "../assets/images/carousel-image-8.png";
import CarouselImage9 from "../assets/images/carousel-image-9.png";
import TriangleDivider from "../assets/images/triangle-divider-image.png";
import MoonizenImage from "../assets/images/Moonizen.png";

const BackgroundImage = {
  backgroundImage: `url(${MoonizenImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "840px",
};

const customDivider = {
  boxShadow: "0px 0px 19px 2px #1898B3",
  height: "5px",
  borderRadius: "5px",
  maxWidth: "620px",
};

function FullWidthSlider() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const sliderRef = useRef(null);

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    autoplaySpeed: 1500,
    slidesToShow: screenSize.width < 768 ? 1 : 3, // Adjust for mobile
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: screenSize.width >= 768, // Enable center mode only on larger screens
  };

  const images = [
    CarouselImage2, // Ensure this image appears first
    CarouselImage1,
    CarouselImage3,
    CarouselImage4,
    CarouselImage5,
    CarouselImage6,
    CarouselImage7,
    CarouselImage8,
    CarouselImage9,
  ];

  return (
    <>
      <section>
        <div className="pt-5 text-center bg-image-atristry" style={BackgroundImage}>
          <Container fluid="lg">
            <h5 className="head-h5 artisrty-heading font-family-AG fw-normal mb-5 text-lg-start">
              Artistry Meets Psychedelics
            </h5>
            <h3 className="head-h3 font-family-Avenir fw-normal mb-5">
              Merging Creativity, Healing, and Exploration
            </h3>
            <h3 className="h3-mobile font-family-Avenir fw-normal text-start mb-5">
              The Atrium has partnered with{" "}
              <a href="https://moonizenstudios.com/" target="_blank" rel="noreferrer">
                Moonizen Studios
              </a>
              , home of the{" "}
              <a href="https://moonizens.com/" target="_blank" rel="noreferrer">
                Moonizen Genesis Collection
              </a>{" "}
              on Polygon, and harnessed the extraordinary skills of Anthony Stuart to infuse life into the JourneyBound Account NFT and Polygenic Journey NFT collections
            </h3>
            <h3 className="head-h3 font-family-Avenir fw-normal mb-4">
              Every creation is meticulously designed to highlight the therapeutic benefits of psychedelics, offering a curated path for your digital and real world exploration of psychedelic experiences
            </h3>
            <div className="divider" style={customDivider}></div>
          </Container>
        </div>
        <div id="slider-section" className="p-4">
          <Slider {...settings} className="deal-slider" ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className="slider-items text-center">
                <Figure className="mb-0">
                  <Image src={image} className="w-full h-auto" />
                </Figure>
              </div>
            ))}
          </Slider>
          <div className="triangle-divider-image py-4 text-center">
            <Image src={TriangleDivider} className="w-100" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FullWidthSlider;
