import React from "react";
import { AboutContainer, AboutWrapper, ImageWrapper } from "./AboutElements";
import stellar from "../../images/stellar1.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <h1>Who are we?</h1>
        <p>
          We are all here for a reason. This is our purpose, and it’s shown to
          us by the dreams that animate our waking life.
        </p>
        <p>
          While this is our destiny, our reality can make it hard. Life happens.
          Obstacles arise. We get hurt. We forget why we’re here. We focus on
          the world we’re given until we lose sight of the world we imagine.
        </p>
        <p>
          Somewhere along the way, we may decide to make a change. We start to
          meet teachers, and they appear in many forms. We recognize them when
          they point to our heart, reminding us where our dreams live.
        </p>
        <p>
          Opening our hearts begins a new life adventure of learning and
          remembering. We learn how our whole being is one interconnected
          miracle. We remember our dreams, dreams that come alive the more we
          feel alive.
        </p>
        <p>
          It may sound simple, but it’s not easy. We have good days. We have bad
          days. And sometimes we need that extra voice of “you can do it.”
        </p>
        <p>
          Stellars remind us of the magic within us all. They are digital
          talismans that contain the superpower of eternal encouragement.
          Consider them everyday champions of love who are always by your side.
        </p>
        <p>
          Each unique Stellar radiates its vibe as a symbol of love and
          transformation. They inspire hope into your process, so you can
          continue fulfilling your life’s purpose one day at a time. They
          believe in you — and in what you do to make your dreams come true.
        </p>
        <p>
          The Stellars community is a collective of true believers and true
          doers. We flow from inspiration, imagination and actualization to
          serve those in service. We are empowered open-hearted dreamers, united
          in purpose.
        </p>
      </AboutWrapper>
      <ImageWrapper>
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
        <img
          class="rounded-corners"
          src={stellar}
          alt={"stellar"}
          height={100}
          width={100}
        />
      </ImageWrapper>
    </AboutContainer>
  );
};

export default About;
