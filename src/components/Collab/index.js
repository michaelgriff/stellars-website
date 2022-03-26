import React from "react";
import {
  CollabContainer,
  CollabWrapper,
  ContactButton,
} from "./CollabElements";

const Collab = () => {
  return (
    <CollabContainer>
      <CollabWrapper>
        <h1 class="white-text">Partnerships & Collabs</h1>
        <br />
        <p class="centered-text white-text">
          If you're interested in collaborating with Stellars, contact us below!
        </p>
        <a href="https://youtube.com">
          <ContactButton>Contact us</ContactButton>
        </a>
      </CollabWrapper>
    </CollabContainer>
  );
};

export default Collab;
