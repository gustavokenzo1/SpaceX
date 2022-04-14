import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageContainer, MessageText } from "./styles";

export const Message = () => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourthText, setShowFourthText] = useState(false);

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstText(false);
      setShowSecondText(true);
    }, 15000);

    setTimeout(() => {
      setShowSecondText(false);
      setShowThirdText(true);
    }, 21000);

    setTimeout(() => {
      setShowThirdText(false);
      setShowFourthText(true);
    }, 30000);

    setTimeout(() => {
      setShowFourthText(false);
      setShowText(false);
    }, 40000);
  }, []);

  return (
    <MessageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 2 }}
    >
      {showText && (
        <MessageText>
          {showFirstText &&
            "Hello earthling! This is your home. It's beautiful, isn't it?"}
          {showSecondText &&
            "Let's explore our present and see what the future holds for us!"}
          {showThirdText &&
            "Hmmm... It looks like there are a lot of advancements in the Aerospace industry!"}
          {showFourthText &&
            "Wow, we can see a lot of things outside of our home! I wonder if there is somehing inside it though..."}
        </MessageText>
      )}
    </MessageContainer>
  );
};
