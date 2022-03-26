import React from "react";
import { TeamContainer, TeamRow, Member, SocialRow } from "./TeamElements";
import stellar from "../../images/stellar1.jpeg";
import { FaTwitter, FaMedium } from "react-icons/fa";

const Team = () => {
  return (
    <TeamContainer>
      <h1>Team</h1>
      <TeamRow>
        <Member>
          <img
            class="rounded-corners"
            src={stellar}
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
            src={stellar}
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
            src={stellar}
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
            src={stellar}
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
            src={stellar}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Jonathan Washington</p>
          <p class="centered-text smaller-text">COMMUNITY MANAGER</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={stellar}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Eddie Molina</p>
          <p class="centered-text smaller-text">SOFTWARE DEVELOPER</p>
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
            src={stellar}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Lia Ray</p>
          <p class="centered-text smaller-text">THE INSPIRATION</p>
          <SocialRow>
            <FaTwitter class="black" size={30} />
            <FaMedium class="black" size={30} />
          </SocialRow>
        </Member>
        <Member>
          <img
            class="rounded-corners"
            src={stellar}
            alt={"stellar"}
            height={300}
            width={300}
          />
          <p class="centered-text">Ben Lang</p>
          <p class="centered-text smaller-text">ADVISOR</p>
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
