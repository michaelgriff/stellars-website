import React from "react";
import {
  RoadmapContainer,
  RoadmapSection,
  RoadmapContent,
  RoadmapText,
} from "./RoadmapElements";
import blue from "../../images/blue-gem.png";
import green from "../../images/green-gem.png";
import orange from "../../images/orange-gem.png";
import pink from "../../images/pink-gem.png";
import teal from "../../images/teal-gem.png";

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <h1>Roadmap</h1>
      <RoadmapSection>
        <h2>WELCOME TO STELLARS SPACE</h2>
        <RoadmapContent>
          <img
            class="vertical-align"
            src={blue}
            alt={"blue"}
            width={100}
            height={100}
          />
          <RoadmapText>
            <p>
              Build a community of stellars who share our vision to help and
              inspire each other
            </p>
            <p>
              Create a supportive and helpful community. Where we host ama’s,
              live podcasts, and classes in the discord.
            </p>
            <p>
              Give out whitelist spots to kind and committed members of the
              Stellars community on Discord and Twitter. Inspire, support, love,
              believe, and help others.
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>STELLARS LAUNCH</h2>
        <RoadmapContent>
          <img
            class="vertical-align"
            src={green}
            alt={"green"}
            width={100}
            height={100}
          />
          <RoadmapText>
            <p>Official presale and public sales go live</p>
            <p>
              250 Samaritans will be held for giveaways, collabs, teachers, and
              post mint marketing
            </p>
            <p>
              3 Eth will be donated to the charity wallet of the community's
              choice every 25% of sales
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>STELLARS MINT OUT</h2>
        <RoadmapContent>
          <img
            class="vertical-align"
            src={orange}
            alt={"orange"}
            width={100}
            height={100}
          />
          <RoadmapText>
            <p>Continue building Stellars Space</p>
            <p>
              Go to in real life Charity events where the community decides
              which charity we donate to and go to. We hope to see you guys
              there
            </p>
            <p>
              Continue having Ama’s, live podcasts, and classes for you guys
              while Stellars Space is being built, we’re almost there!
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>STELLARS SPACE IS COMPLETED</h2>
        <RoadmapContent>
          <img
            class="vertical-align"
            src={pink}
            alt={"pink"}
            width={100}
            height={100}
          />
          <RoadmapText>
            <p>
              Stellars Space is live! NFT holders become the creator and share
              their valuable content! There will be a subscription plan for
              non-holders to be able to view. 40% of subscriptions will go to
              charities of the community’s choice where the team will go and
              support those charities in real life. We hope to see you guys
              there!
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>WHAT DOES THE FUTURE HOLD?</h2>
        <RoadmapContent>
          <img
            class="vertical-align"
            src={teal}
            alt={"teal"}
            width={100}
            height={100}
          />
          <RoadmapText>
            <p>
              We are exploring the metaverse, getting exclusive merch for the
              Stellars Community, and our first real life event in Miami at
              Sacred Space, and more to come!
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
    </RoadmapContainer>
  );
};

export default Roadmap;
