import styled from "styled-components";

export const GalleryContainer = styled.div`
  background-color: #fff;
  margin: 0px;
  padding: 0px;
`;

export const GalleryText = styled.div`
  padding: 100px 80px 0px;

  @media screen and (max-width: 1121px) {
    padding: 10px 30px;
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  margin: 65px 50px;

  @media screen and (max-width: 1121px) {
    margin-bottom: 50px;
    margin-top: 0px;
  }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1121px) {
    flex-direction: column;
    align-items: center;
  }
`;
