import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { useRocket } from "../../context/Rocket";
import { InfoContainer, ReturnButton } from "../Card/styles";
import { CardItem } from "../CardItem";
import { SeparatorComponent } from "../Separator";

export const UpcomingLaunches = ({
  separatorDelay,
  setSelectedMenu,
  setSeparatorDelay,
  setCardItemDelay,
  setIconsDelay,
  setCardHeight,
}: any) => {
  const { upcomingLaunches, setUpcoming, setRocket } = useRocket();

  return (
    <>
      <motion.div key="upcomingLaunches">
        <InfoContainer>
          {upcomingLaunches.map((launch: any, key: any) => {
            return (
              <div
                key={key}
                onClick={() => {
                  setUpcoming(key.toString());
                  setRocket("");
                }}
              >
                <CardItem
                  icon={<BsInfoCircle />}
                  delay={1}
                  description={launch.mission_name}
                />
                <SeparatorComponent delay={separatorDelay} />
              </div>
            );
          })}
          <ReturnButton
            onClick={() => {              
              setSeparatorDelay(0);
              setCardItemDelay(1);
              setIconsDelay(2);
              setUpcoming("");
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
