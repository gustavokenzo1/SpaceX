import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import {
  BlueText,
  FirstIntro,
  SkipButton,
  StarWarsContainer,
  StarWarsText,
} from "./styles";

const StarWars = ({ handleClose }: any) => {
  const [showIntro, setShowIntro] = useState(true);
  setTimeout(() => {
    setShowIntro(false);
  }, 7000);

  return (
    <StarWarsContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      key="down"
    >
      <RemoveScrollBar />
      <SkipButton onClick={handleClose}>Skip</SkipButton>
      <AnimatePresence exitBeforeEnter>
        {showIntro ? (
          <FirstIntro
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="intro"
          >
            <BlueText>
              A long time ago in a galaxy far, <br /> far away...{" "}
            </BlueText>
          </FirstIntro>
        ) : (
          <>
            <StarWarsText>
              <h2>
                EPISODE I <br /> THE API MENACE
              </h2>
              <p>
                The year is 2022. Most humans continue to destroy their own
                home. The Earth is only getting more and more polluted. Some
                climate conferences have tried to soften the situation, but the
                greed for money and power always overcomes the need for
                preservation.
              </p>
              <p>
                Hoping to resolve that matter (not to confuse with they don't
                also wanting money and being complete saints), some companies
                and agencies are developing ways of exploring the space, by
                building rockets and robots, so we can populate other places.
                The most popular ones beign NASA and SpaceX.
              </p>
              <p>
                In this first episode, we will explore what SpaceX has done and
                what they are planning to do. Taking a look at their launch
                sites, rockets and previous and future launches, by using a
                GraphQL API. And, who knows... maybe in the future I'll also
                make a project about NASA, which I've already gotten a key for
                their API.
              </p>
              <p>
                All the technologies I used in this project, along with why I
                chose them, what were their advantages, etc, are all described
                in the{" "}
                <a
                  href="https://github.com/gustavokenzo1/SpaceX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#006fc9" }}
                >
                  README.md
                </a>{" "}
                file on this repo's GitHub page.
              </p>
              <button onClick={handleClose}>Explore</button>
            </StarWarsText>
          </>
        )}
      </AnimatePresence>
    </StarWarsContainer>
  );
};

export default StarWars;
