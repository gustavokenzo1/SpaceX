import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import { useRocket } from "../../context/Rocket";
import { InfoContainer, ReturnButton } from "../Card/styles";
import { CardItem } from "../CardItem";
import { SeparatorComponent } from "../Separator";

export const PastLaunches = ({
  separatorDelay,
  setSelectedMenu,
  setSeparatorDelay,
  setCardItemDelay,
  setIconsDelay,
  setCardHeight,
  setCardDelay,
}: any) => {
  const { pastLaunches, setPast, setRocket, setUpcoming, setPhotoToShow } =
    useRocket();

  return (
    <>
      <motion.div key="pastLaunches">
        <InfoContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ReturnButton
            onClick={() => {
              setSeparatorDelay(1);
              setCardItemDelay(0);
              setIconsDelay(1);
              setPast("");
              setCardDelay(3);
              setCardHeight(350);
              setTimeout(function () {
                setSelectedMenu("");
              }, 1000);
            }}
            as={motion.button}
            exit={{ width: 0, opacity: 0, fontSize: 0 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          >
            Return
          </ReturnButton>
          {pastLaunches.map((launch: any, key: any) => {
            return (
              <div
                key={key}
                onClick={() => {
                  setPast(key.toString());
                  setRocket("");
                  setUpcoming("");
                  setPhotoToShow(0);
                }}
              >
                <CardItem
                  icon={
                    launch.links.mission_patch ? (
                      <img
                        src={launch.links.mission_patch}
                        alt="Mission Badge"
                        style={{ height: 32 }}
                      />
                    ) : (
                      <BsInfoCircle />
                    )
                  }
                  delay={1}
                  description={launch.mission_name}
                />
                <SeparatorComponent delay={separatorDelay} />
              </div>
            );
          })}
          <span style={{ marginBottom: "2rem" }}></span>
        </InfoContainer>
      </motion.div>
    </>
  );
};
