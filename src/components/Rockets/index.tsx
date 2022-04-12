import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { useRocket } from "../../context/Rocket";
import { InfoContainer, ReturnButton } from "../Card/styles";
import { CardItem } from "../CardItem";
import { SeparatorComponent } from "../Separator";

export const Rockets = ({
  rocketsList,
  separatorDelay,
  setSelectedMenu,
  setSeparatorDelay,
  setCardItemDelay,
  setIconsDelay,
  setCardHeight,
}: any) => {
  const { setRocket } = useRocket();

  return (
    <>
      <motion.div key="rockets">
        <InfoContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {rocketsList.map((rocket: any, key: number) => {
            return (
              <div key={key}>
                <CardItem
                  icon={<BsInfoCircle />}
                  delay={1}
                  description={rocket}
                />
                <SeparatorComponent delay={separatorDelay} />
              </div>
            );
          })}
          <ReturnButton
            onClick={() => {
              setSeparatorDelay(2);
              setCardItemDelay(1);
              setIconsDelay(2);
              setRocket("");
              setTimeout(function () {
                setSelectedMenu("");
                setCardHeight(350);
              }, 1000);
            }}
          >
            Return
          </ReturnButton>
        </InfoContainer>
      </motion.div>
    </>
  );
};
