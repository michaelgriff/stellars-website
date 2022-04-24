import React, { useState } from "react";
import { Data } from "./data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background: #fff;
  padding-bottom: 30px;
`;

const Container = styled.div`
  top: 3%;
  margin: 0px 100px;
  width: 70%;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const Wrap = styled.div`
  colour: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom-style: solid;
  border-color: #000;
  border-width: medium;

  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }

    span {
      margin-right: 0rem;
    }
  }
  span {
    margin-right: 1.5rem;
  }
`;

const TopWrap = styled.div`
  colour: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom-style: solid;
  border-top-style: solid;
  border-color: #000;
  border-width: medium;

  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }

    span {
      margin-right: 0rem;
    }
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  // background: #cdcaef;
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-color: #000;
  border-width: 0px medium medium;
  //   margin: 0px 40px;

  p {
    font-size: 1.2rem;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.7rem;
      padding: 20px;
    }
  }
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "000", size: "25px" }}>
      <FaqSection>
        <h1>FAQ</h1>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                {index === 0 ? (
                  <TopWrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </TopWrap>
                ) : (
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                )}

                {clicked === index ? (
                  <Dropdown>
                    <p className="new-line">{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faq;
