import { AnimatePresence, motion } from "framer-motion";
import { useRocket } from "../../context/Rocket";
import { RocketDescription, RocketInfoContainer, RocketInfos } from "./styles";

export const RocketInfo = () => {
  const { rocket, setRocket, rocketsData, upcoming } = useRocket();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {rocket && !upcoming && (
        <RocketInfoContainer
          as={motion.div}
          initial={{ right: "-100%" }}
          animate={{ right: "1%" }}
          exit={{ right: "-100%" }}
          transition={{ duration: 1 }}
          onClick={() => setRocket("")}
          whileHover={{ opacity: 1 }}
        >
          {rocket}
          {rocketsData.map((rocketData: any, key: number) => {
            if (rocketData.name === rocket) {
              return (
                <RocketInfos key={key}>
                  <RocketDescription>
                    About:
                    <div style={{ width: "70%" }}>{rocketData.description}</div>
                  </RocketDescription>
                  <RocketDescription>
                    Mass:
                    <div>{rocketData.mass.kg} kg</div>
                  </RocketDescription>
                  <RocketDescription>
                    Height:
                    <div>{rocketData.height.meters} m</div>
                  </RocketDescription>
                  <RocketDescription>
                    Cost per launch:
                    <div>$ {rocketData.cost_per_launch}</div>
                  </RocketDescription>
                  <RocketDescription>
                    Success rate:
                    <div>{rocketData.success_rate_pct}%</div>
                  </RocketDescription>
                </RocketInfos>
              );
            }
          })}
        </RocketInfoContainer>
      )}
    </AnimatePresence>
  );
};
