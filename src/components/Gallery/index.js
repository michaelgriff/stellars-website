import React from "react";
import {
  GalleryContainer,
  GalleryText,
  ImageWrapper,
  GalleryWrapper,
} from "./GalleryElements";
import stellar from "../../images/stellar2.jpeg";

const Gallery = () => {
  return (
    <GalleryContainer>
      <h1>THE COLLECTION</h1>
      <GalleryWrapper>
        <GalleryText>
          <p>
            Each Stellars NFT is special and unique. They each consist of
            different symbols and vibes related to the mind, body, and spirit.
            They can be viewed as your very own talisman that will bring you an
            abundance of positive and great things in life. Each piece is up for
            your own interpretation and understanding.
          </p>
          <p>
            We chose vibrant colors, mostly chakra inspired tones representing
            different parts of the body from the base of the spine to the top of
            your head. We also added symbols and spirit animals to add depth in
            the art and more meaning behind each piece… We hope you enjoy the
            art and love it as much as we do!
          </p>
        </GalleryText>
        <ImageWrapper>
          <img class="responsive collection" src={stellar} alt={"robot"} />
        </ImageWrapper>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
