import React from "react";
import {
  RoadmapContainer,
  RoadmapSection,
  RoadmapContent,
  RoadmapText,
} from "./RoadmapElements";
// import blue from "../../images/blue-gem.png";
// import green from "../../images/green-gem.png";
// import orange from "../../images/orange-gem.png";
// import pink from "../../images/pink-gem.png";
// import teal from "../../images/teal-gem.png";

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <h1 class="white-text">Vision Board</h1>
      <RoadmapSection>
        <h2>PHASE 1 - STELLAR SPACE</h2>
        <RoadmapContent>
          {/* <img
            class="vertical-align"
            src={blue}
            alt={"blue"}
            width={100}
            height={100}
          /> */}
          <RoadmapText>
            <p>
              When we first created Stellars we wanted to bring value before our
              launch by hosting holistic wellness classes with different
              teachers. Insightful life stories, inspirational podcasts with
              special guests, community members, and team members. Our goal was
              to create a space of inspiration, creation, and love. We wanted
              people to feel at ease. We wanted to build a community where we
              all support, inspire, and believe in each other. We are a
              community of self believers. We are all outstanding.
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>PHASE 2 - STELLARS FUND</h2>
        <RoadmapContent>
          {/* <img
            class="vertical-align"
            src={green}
            alt={"green"}
            width={100}
            height={100}
          /> */}
          <RoadmapText>
            <p>
              After the sell out of Stellars, 50% of the mint revenue will go
              back into the project to ensure longevity of this project and help
              fund the project’s vision board. Owning a Stellar can also be used
              to apply for paid positions within the community.
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>PHASE 3 - GIVE BACK</h2>
        <RoadmapContent>
          {/* <img
            class="vertical-align"
            src={orange}
            alt={"orange"}
            width={100}
            height={100}
          /> */}
          <RoadmapText>
            <p>
              After sell out, Lia Ray (Jacob Ray’s little sister) wanted to give
              you guys something special. She Created 300 tiny miracles which is
              the name of her bracelet to raffle out to holders. In addition, we
              have partnered with Frequency Mind to give a 3 months free trial
              to their platform available to all of our minters. We will
              continue providing daily Hosting holistic wellness classes with
              different teachers, deep meaningful podcasts and AMA’s with
              special guests, and insightful life stories.
            </p>
          </RoadmapText>
        </RoadmapContent>
      </RoadmapSection>
      <RoadmapSection>
        <h2>STELLARS SPACE IS COMPLETED</h2>
        <RoadmapContent>
          {/* <img
            class="vertical-align"
            src={pink}
            alt={"pink"}
            width={100}
            height={100}
          /> */}
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
          {/* <img
            class="vertical-align"
            src={teal}
            alt={"teal"}
            width={100}
            height={100}
          /> */}
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
