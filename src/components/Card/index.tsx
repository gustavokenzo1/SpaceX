import { AnimatePresence, motion } from "framer-motion";
import { ActionIcon, CardContainer, CardTitle } from "./styles";
import { SeparatorComponent } from "../Separator";
import { CardItem } from "../CardItem";
import { useEffect, useState } from "react";
import { Rockets } from "../Rockets";
import { Socials } from "../Socials";

import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRocket } from "../../context/Rocket";
import { PastLaunches } from "../PastLaunches";
import { UpcomingLaunches } from "../UpcomingLaunches";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export const Card = ({ data, setShowInfo }: any) => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const [rocketsList, setRocketsList] = useState([]);
  const [separatorDelay, setSeparatorDelay] = useState(7);
  const [cardItemDelay, setCardItemDelay] = useState(8);
  const [iconsDelay, setIconsDelay] = useState(9);
  const [cardDelay, setCardDelay] = useState(5);

  const [cardHeight, setCardHeight] = useState(350);
  const [showCard, setShowCard] = useState(true);

  const {
    setRocketsData,
    setUpcomingLaunches,
    upcomingLaunches,
    setPastLaunches,
    pastLaunches,
  } = useRocket();

  useEffect(() => {
    async function fetchData() {
      const { rockets, launchesUpcoming, launchesPast } = await data;

      const rocketNames = rockets.map((rocket: any) => {
        return rocket.name;
      });

      const upcomingLaunches: any[] = [];
      launchesUpcoming.map((launch: any) => {
        if (!upcomingLaunches.includes(launch)) {
          upcomingLaunches.push(launch);
        }
      });

      setRocketsList(rocketNames);
      setRocketsData(rockets);
      setUpcomingLaunches(upcomingLaunches);
      setPastLaunches(launchesPast);
    }

    fetchData();
  }, [data, setRocketsData, setUpcomingLaunches, setPastLaunches]);

  return (
    <CardContainer
      as={motion.div}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 0.7, height: cardHeight }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: cardDelay }}
      /* drag
      dragConstraints={{ left: 10, right: 200, top: 10, bottom: 200 }} */
      whileHover={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <div style={{ width: "100%" }}>
        <ActionIcon
          onClick={() => {
            setCardDelay(0);
            setSeparatorDelay(1);
            setCardItemDelay(2);
            setIconsDelay(3);
            setShowCard(!showCard);
            setCardHeight(
              showCard
                ? 30
                : selectedMenu === "Rockets"
                ? 400
                : selectedMenu === "Upcoming Launches"
                ? upcomingLaunches.length * 140 < 200
                  ? 200
                  : upcomingLaunches.length * 140
                : selectedMenu === "Past Launches"
                ? 400
                : 350
            );
          }}
        >
          {showCard ? (
            <AiFillMinusCircle color="#ffbe00" size={20} />
          ) : (
            <BsFillPlusCircleFill color="#2fc900" size={20} />
          )}
        </ActionIcon>
        <CardTitle>MISSION CONTROL</CardTitle>
        {showCard && (
          <AnimatePresence exitBeforeEnter={true}>
            {!selectedMenu ? (
              <motion.div key="home">
                <SeparatorComponent delay={separatorDelay} />
                <div
                  onClick={() => {
                    setIconsDelay(0);
                    setSeparatorDelay(1);
                    setCardItemDelay(1);
                    setCardHeight(400);
                    setCardDelay(2);
                    setTimeout(function () {
                      setSelectedMenu("Rockets");
                    }, 500);
                  }}
                >
                  <CardItem delay={cardItemDelay} description={"Rockets"} />
                </div>
                <SeparatorComponent delay={separatorDelay} />
                <div
                  onClick={() => {
                    setIconsDelay(0);
                    setSeparatorDelay(1);
                    setCardItemDelay(1);
                    setCardHeight(
                      upcomingLaunches.length * 140 < 200
                        ? 200
                        : upcomingLaunches.length * 140
                    );
                    setCardDelay(2);
                    setTimeout(function () {
                      setSelectedMenu("Upcoming Launches");
                    }, 500);
                  }}
                >
                  <CardItem
                    delay={cardItemDelay}
                    description={"Upcoming Launches"}
                  />
                </div>
                <SeparatorComponent delay={separatorDelay} />
                <div
                  onClick={() => {
                    setIconsDelay(0);
                    setSeparatorDelay(1);
                    setCardItemDelay(1);
                    setTimeout(function () {
                      setSelectedMenu("Past Launches");
                      setCardHeight(400);
                    }, 500);
                  }}
                >
                  <CardItem
                    delay={cardItemDelay}
                    description={"Past Launches"}
                  />
                </div>
                <SeparatorComponent delay={separatorDelay} />
                <Socials delay={iconsDelay} />
              </motion.div>
            ) : selectedMenu === "Rockets" ? (
              <Rockets
                rocketsList={rocketsList}
                separatorDelay={separatorDelay}
                setSelectedMenu={setSelectedMenu}
                setSeparatorDelay={setSeparatorDelay}
                setCardItemDelay={setCardItemDelay}
                setIconsDelay={setIconsDelay}
                setCardHeight={setCardHeight}
                setShowInfo={setShowInfo}
                setCardDelay={setCardDelay}
              />
            ) : selectedMenu === "Upcoming Launches" ? (
              <UpcomingLaunches
                separatorDelay={separatorDelay}
                setSelectedMenu={setSelectedMenu}
                setSeparatorDelay={setSeparatorDelay}
                setCardItemDelay={setCardItemDelay}
                setIconsDelay={setIconsDelay}
                setCardHeight={setCardHeight}
                setShowInfo={setShowInfo}
                setCardDelay={setCardDelay}
              />
            ) : (
              <PastLaunches
                separatorDelay={separatorDelay}
                setSelectedMenu={setSelectedMenu}
                setSeparatorDelay={setSeparatorDelay}
                setCardItemDelay={setCardItemDelay}
                setIconsDelay={setIconsDelay}
                setCardHeight={setCardHeight}
                setShowInfo={setShowInfo}
                setCardDelay={setCardDelay}
              />
            )}
          </AnimatePresence>
        )}
      </div>
    </CardContainer>
  );
};
