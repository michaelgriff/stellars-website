import React from "react";
import { TeamContainer, TeamRow, Member, SocialRow } from "./TeamElements";
import jacob from "../../images/jacob.JPG";
import mel from "../../images/mel.JPG";
import ria from "../../images/ria.JPG";
import pavel from "../../images/pavel.JPG";
import bri from "../../images/bri.JPG";
import natalie from "../../images/natalie.JPG";
import mike from "../../images/mike.jpeg";
import {
  FaTwitter,
  FaMedium,
  FaInstagram,
  FaGlobeAmericas,
} from "react-icons/fa";

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
            <a href="https://instagram.com/_jacobray?igshid=YmMyMTA2M2Y=">
              <FaInstagram class="black" size={30} />
            </a>
            <a href="https://twitter.com/jacobray111?s=11&t=GUgkYHPdxqHZH2NGpxBGrg">
              <FaTwitter class="black" size={30} />
            </a>
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
            <a href="https://www.instagram.com/mel.alvxrez/">
              <FaInstagram class="black" size={30} />
            </a>
            <a href="https://twitter.com/iwannabefamousk">
              <FaTwitter class="black" size={30} />
            </a>
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
            <a href="https://instagram.com/riaraysee?igshid=YmMyMTA2M2Y=">
              <FaInstagram class="black" size={30} />
            </a>
            <a href="https://twitter.com/riarayspeak?s=20&t=_JdN-qjoC7pnpdPm062xXQ">
              <FaTwitter class="black" size={30} />
            </a>
            <a href="https://riaray.com/">
              <FaGlobeAmericas class="black" size={30} />
            </a>
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
          <p class="centered-text">Leticia</p>
          <p class="centered-text smaller-text">THE ARTIST</p>
          <SocialRow>
            <a href="https://twitter.com/letbri?s=20&t=_JdN-qjoC7pnpdPm062xXQ">
              <FaTwitter class="black" size={30} />
            </a>
          </SocialRow>
        </Member>
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
            <a href="https://instagram.com/nataliejogay?igshid=YmMyMTA2M2Y=">
              <FaInstagram class="black" size={30} />
            </a>
            <a href="https://www.nataliejogay.com/">
              <FaGlobeAmericas class="black" size={30} />
            </a>
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
            <a href="https://instagram.com/noaaonofficial?igshid=YmMyMTA2M2Y=">
              <FaInstagram class="black" size={30} />
            </a>
            <a href="https://twitter.com/noaaonoffic?s=20&t=_JdN-qjoC7pnpdPm062xXQ">
              <FaTwitter class="black" size={30} />
            </a>
            <a href="https://noaaon.com/">
              <FaGlobeAmericas class="black" size={30} />
            </a>
          </SocialRow>
        </Member>
      </TeamRow>
      <TeamRow>
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
          </SocialRow>
        </Member>
      </TeamRow>
    </TeamContainer>
  );
};

export default Team;
