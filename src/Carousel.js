import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ResponsiveCarousel = () => {
  const images = [
    {
      src: "https://cdn.shopify.com/s/files/1/0279/8095/5745/files/StockSnap_Y8O9M1KOT2_1920x570_1666e022-5cc4-4119-b856-173bb5fd0035_1920x570.png?v=1587504202",
      text: "WOMEN FASHION",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0279/8095/5745/files/IMG_copy_1920x570.png?v=1591458151",
      text: "SUMMER SALE",
    },

    {
      src: "https://cdn.shopify.com/s/files/1/0279/8095/5745/files/Clip_4c0e8e9e-ae61-422c-b0d3-23da8ae1cf85_1920x570.png?v=1591458271",
      text: "NEW ARRIVALS",
    },
  ];

  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <div className="h-128">
            <div
              key={index}
              className="h-full w-screen bg-cover bg-no-repeat bg-center bg-slate-800"
              style={{
                backgroundImage: "url(" + image.src + ")",
              }}
            >
              <div className="text-white grid place-items-center h-full   font-serif">
                <p className=" text-xl">WOMEN COLLECTION 2022</p>
                <p className="text-center  text-5xl ">{image.text}</p>
                <button className="bg-black px-6 py-4">SHOP NOW</button>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ResponsiveCarousel;
