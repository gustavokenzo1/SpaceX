import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarWars from "../../components/StarWars";

export const Intro = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {isOpen && <StarWars handleClose={handleClose} />}
    </AnimatePresence>
  );
};
