import { motion } from "framer-motion";

import { AiFillGithub, AiFillLinkedin, AiFillApi } from "react-icons/ai";
import { SiSpacex } from "react-icons/si";
import { CardIcons } from "./styles";

export const Socials = ({ delay }: any) => {
  return (
    <CardIcons
      as={motion.div}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      <a
        href="https://github.com/gustavokenzo1/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-kenzo/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://api.spacex.land/graphql/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillApi />
      </a>
      <a href="https://www.spacex.com/" target="_blank" rel="noreferrer">
        <SiSpacex />
      </a>
    </CardIcons>
  );
};
