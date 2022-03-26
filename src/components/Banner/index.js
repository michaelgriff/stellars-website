import React from "react";
import banner from "../../images/walk-banner.mp4";
import "../../styles.css";

const Banner = () => {
  return (
    // <img id="banner-image" src={banner} alt={"banner"} />;
    <video class="video" autoPlay muted loop>
      <source src={banner} type={"video/mp4"} />
    </video>
  );
};

export default Banner;
