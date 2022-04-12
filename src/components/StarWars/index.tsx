import { motion } from "framer-motion";
import React from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { SkipButton, StarWarsContainer, StarWarsText } from "./styles";

const StarWars = ({ handleClose }: any) => {
  return (
    <StarWarsContainer
      as={motion.div}
      exit={{ scale: 10, opacity: 0}}
      transition={{ duration: 2 }}
      key="down"
    >
      <RemoveScrollBar />
      <SkipButton onClick={handleClose}>Skip</SkipButton>
      <StarWarsText>
        <p>A long time ago (not actually that long ago)...</p>
        <p>
          I decided that I wanted to make a Space themed application because,
          previously, I was going to graduate in Aerospace Engineering. So,
          despite changing degrees, I still love this theme.
        </p>
        <p>
          I took this idea as an opportunity to learn about ThreeJS, a 3D
          rendering library for JavaScript (I ended up using React Three Fiber,
          which is ThreeJS but for React). I also wanted to learn how to consume
          an API using GraphQL, instead of the most common REST API approach.
        </p>
        <p>
          Disclaimer: This is a personal project only, and shouldn't be
          associated with SpaceX. The API is also not official from SpaceX.
        </p>
        <button onClick={handleClose}>Explore</button>
      </StarWarsText>
    </StarWarsContainer>
  );
};

export default StarWars;
