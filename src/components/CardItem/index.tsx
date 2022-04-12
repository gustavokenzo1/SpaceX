import { motion } from "framer-motion";
import { CardMenu } from "./styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRocket } from "../../context/Rocket";

export const CardItem = ({ description, delay, icon, position }: any) => {
  const { setRocket, setUpcoming } = useRocket();

  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <CardMenu
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay }}
        onClick={() => {
          if (position >= 0) {
            setUpcoming(position);
          } else if (icon) {
            setRocket(description);
          }
        }}
      >
        {description}
        {!icon ? <MdOutlineKeyboardArrowRight /> : icon}
      </CardMenu>
    </motion.div>
  );
};
