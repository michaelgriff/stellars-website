import React from "react";
import { CharityContainer, CharityWrapper } from "./CharityElements";
import { ImageWrapper } from "../About/AboutElements";
import stellar from "../../images/stellar1.jpeg";

const Charity = () => {
  return (
    <CharityContainer>
      <CharityWrapper>
        <h1>Charity</h1>
        <p>
          Our team's vision has a lot to do with creating a difference in the
          world and helping as much as we possibly can. We want to see this
          project make a difference in the world, create an impact. We can all
          do this together.
        </p>
        <p>
          This platform will have subscriptions available to the public who want
          to participate in this community! Our team has decided on having 40%
          of subscription sales go directly to charities of your choice! Every 2
          months we will release some charities we love so that you can vote on
          which you’d like us to donate to, you can also DM us or privately
          message us on discord with your favorite charity to include for the
          next months to come vote! Having a subscription with stellars space
          will help you make a major difference in the world.
        </p>
        <p>
          Being generous and supporting others produces positivity in one’s
          life, it may give many of us a purpose in life, making the world a
          better place. We believe we can impact and create a difference with
          this platform and strong community. We won’t only donate the proceeds
          but our team will actively participate at multiple charities as well,
          and our community is more than welcome to join us when we do.
        </p>
      </CharityWrapper>
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
      </ImageWrapper>
    </CharityContainer>
  );
};

export default Charity;
