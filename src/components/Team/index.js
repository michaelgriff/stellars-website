import React from "react";
import { TeamContainer, TeamRow, Member, SocialRow } from "./TeamElements";
import jacob from "../../images/jacob.JPG";
import mel from "../../images/mel.JPG";
import ria from "../../images/ria.JPG";
import pavel from "../../images/pavel.JPG";
import bri from "../../images/bri.JPG";
import natalie from "../../images/natalie.JPG";
import mike from "../../images/mike.jpeg";
import { FaTwitter, FaMedium } from "react-icons/fa";

const Team = () => {
  return (
    <TeamContainer>
      <h1>Team</h1>
      <TeamRow>
        <Member>
          <img
            class="rounded-corners"
            src={jacob}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Jacob Ray</p>
          <p class="centered-text smaller-text">
            FOUNDER, CREATIVE AND MARKETING DIRECTOR
          </p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={mel}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Melissa Alvarez</p>
          <p class="centered-text smaller-text">
            FOUNDER, CREATIVE AND MARKETING DIRECTOR
          </p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={ria}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Ria Ray</p>
          <p class="centered-text smaller-text">FOUNDER AND ADVISOR</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
      </TeamRow>
      <TeamRow>
        <Member>
          <img
            class="rounded-corners"
            src={natalie}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Natalie Jo Gay</p>
          <p class="centered-text smaller-text">Position</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={mike}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Michael Griff</p>
          <p class="centered-text smaller-text">DEVELOPER</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={pavel}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Pavel Stuchlik</p>
          <p class="centered-text smaller-text">Position</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
      </TeamRow>
      <TeamRow>
        <Member>
          <img
            class="rounded-corners"
            src={bri}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Bri</p>
          <p class="centered-text smaller-text">THE ARTIST</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
      </TeamRow>
    </TeamContainer>
  );
};

export default Team;
