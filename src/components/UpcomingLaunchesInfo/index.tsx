import { AnimatePresence, motion } from "framer-motion";
import { useRocket } from "../../context/Rocket";
import {
  UpcomingDescription,
  UpcomingInfoContainer,
  UpcomingInfos,
} from "./style";

export const UpcomingLaunchesInfo = () => {
  const { upcoming, setUpcoming, rocket, upcomingLaunches, past } = useRocket();
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {upcoming && !rocket && !past && (
        <UpcomingInfoContainer
          as={motion.div}
          initial={{ right: "-100%" }}
          animate={{ right: "1%" }}
          exit={{ right: "-100%" }}
          transition={{ duration: 1 }}
          onClick={() => {
            setUpcoming("");
          }}
          whileHover={{ opacity: 1 }}
        >
          {upcomingLaunches[upcoming].mission_name}
          {upcomingLaunches.map((launch: any, key: any) => {
            if (key.toString() === upcoming) {
              return (
                <UpcomingInfos key={key}>
                  <UpcomingDescription>
                    Details:
                    <div style={{ width: "70%" }}>{launch.details}</div>
                  </UpcomingDescription>
                  <UpcomingDescription>
                    Rocket:
                    <div>{launch.rocket.rocket_name}</div>
                  </UpcomingDescription>
                  <UpcomingDescription>
                    Launch Site:
                    <div style={{ width: "60%" }}>
                      {launch.launch_site.site_name_long}
                    </div>
                  </UpcomingDescription>
                </UpcomingInfos>
              );
            }
          })}
        </UpcomingInfoContainer>
      )}
    </AnimatePresence>
  );
};
