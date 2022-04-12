import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRocket } from "../../context/Rocket";
import {
  CloseIcon,
  NextIcon,
  PastDescription,
  PastInfoContainer,
  PastInfos,
  Photos,
  PreviousIcon,
  Slider,
} from "./styles";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const PastLaunchesInfo = () => {
  const { past, setPast, pastLaunches, rocket, upcoming } = useRocket();

  const { photoToShow, setPhotoToShow } = useRocket();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {past && !rocket && !upcoming && (
        <PastInfoContainer
          as={motion.div}
          initial={{ right: "-100%" }}
          animate={{ right: "1%" }}
          exit={{ right: "-100%" }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 1 }}
        >
          <CloseIcon
            onClick={() => {
              setPast("");
            }}
          >
            <AiOutlineCloseCircle />
          </CloseIcon>
          <div style={{ marginTop: "3rem" }}>
            {pastLaunches[parseInt(past)].mission_name}
          </div>
          {pastLaunches.map((launch: any, key: any) => {
            if (key.toString() === past) {
              return (
                <PastInfos key={key}>
                  <PastDescription>
                    <img
                      src={launch.links.mission_patch}
                      alt="mission"
                      width="50%"
                      style={{ marginLeft: "5.5rem" }}
                    />
                  </PastDescription>
                  <PastDescription>
                    Details:
                    <div style={{ width: "70%" }}>
                      {launch.details ? launch.details : "Unavailable"}
                    </div>
                  </PastDescription>
                  <PastDescription>
                    Rocket:
                    <div>{launch.rocket.rocket_name}</div>
                  </PastDescription>
                  <PastDescription>
                    Local:
                    <div style={{ width: "70%" }}>
                      {launch.launch_site.site_name_long}
                    </div>
                  </PastDescription>
                  {launch.links.flickr_images.length > 0 && (
                    <Photos>
                      Photos
                      <Slider>
                        <PreviousIcon
                          onClick={() => {
                            setPhotoToShow(
                              photoToShow - 1 >= 0 ? photoToShow - 1 : 0
                            );
                          }}
                        >
                          <MdNavigateBefore />
                        </PreviousIcon>
                        <img
                          src={launch.links.flickr_images[photoToShow]}
                          alt="Mission Photos"
                        />
                        <NextIcon
                          onClick={() =>
                            setPhotoToShow(
                              photoToShow + 1 <
                                launch.links.flickr_images.length
                                ? photoToShow + 1
                                : photoToShow
                            )
                          }
                        >
                          {" "}
                          <MdNavigateNext />{" "}
                        </NextIcon>
                      </Slider>
                    </Photos>
                  )}
                </PastInfos>
              );
            }
          })}
        </PastInfoContainer>
      )}
    </AnimatePresence>
  );
};
