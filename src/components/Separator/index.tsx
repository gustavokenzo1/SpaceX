import { motion } from "framer-motion";
import { Separator } from "./styles";

export const SeparatorComponent = ({ delay }: any) => {
  return (
    <motion.div exit={{ width: "0%" }} transition={{ duration: 1, delay: 1 }}>
      <Separator
        as={motion.div}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: delay }}
      />
    </motion.div>
  );
};
