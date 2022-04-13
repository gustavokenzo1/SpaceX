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
            <BlueText>A long time ago in a galaxy far,</BlueText>
            <BlueText>far away...</BlueText>
          </FirstIntro>
        ) : (
          <>
            <StarWarsText>
              <h1>
                EPISODE I <br /> THE API STRIKES{" "}
              </h1>
              <p>
                I know, I know... Without the music this intro doesn't have the
                same effect, but give me a break, I don't want to get
                copyrighted. This is a special project to me, so there will be a
                big text below, that's why there is a skip button.
              </p>
              <p>
                At the start of the year, I was an Aerospace Engineer student at
                Universidade de Brasília (Brazil). But, at around February, I
                decided to change courses and am now studying Software
                Engineering (I'm currently on my 2nd semester), since
                programming and everything that flies are my favorite fields
                (and one of them has actual jobs lol).
              </p>
              <p>
                Anyways... I've been wanting to do this project for quite some
                time, but only had the idea in mind, and didn't have a clue on
                how to start. I was going to delay it till vacation, so I could
                have time to study, but I decided to do it anyway, because I
                thought this was a freaking cool idea and I couldn't wait to see
                how it turned out.
              </p>
              <p>
                I took extra effort in this one, since it marks 1 year since my
                first "Hello World", and I wanted to see how far I've come, and
                to use this project as a progress rule of my learning path. Now
                that I no long study Aerospace Engineering, I hope that I can
                learn a lot more about this crazy world that is programming.
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
                  README.md file on this repo's GitHub
                </a>
                . There may be repetitive text, since I'm writing this after
                I've almost finished the project.
              </p>
              <p>
                If you sticked to the end of this giant text, I'm jealous of how
                much free time you have, but I hope you enjoy this project as
                much as I enjoyed making it.
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
