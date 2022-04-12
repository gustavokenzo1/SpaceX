import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import styled from "styled-components";
import { Earth } from "../../components/Earth";

import { gql, useQuery } from "@apollo/client";
import RocketProvider from "../../context/Rocket";
import { RocketInfo } from "../../components/RocketInfo";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Card } from "../../components/Card";
import { UpcomingLaunchesInfo } from "../../components/UpcomingLaunchesInfo";
import { Sun } from "../../components/Sun";
import { Loading } from "../../components/Loading";
import { PastLaunchesInfo } from "../../components/PastLaunchesInfo";

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GET_INFOS = gql`
  {
    rockets {
      cost_per_launch
      success_rate_pct
      height {
        meters
      }
      id
      description
      mass {
        kg
      }
      name
    }
    launchesUpcoming {
      id
      details
      rocket {
        rocket_name
      }
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
    }
    launchesPast {
      id
      details
      rocket {
        rocket_name
      }
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      links {
        video_link
        flickr_images
        mission_patch
      }
    }
  }
`;

export const Dashboard = () => {
  const { data } = useQuery(GET_INFOS);

  function CameraMovement() {
    useFrame(({ clock, camera }) => {
      if (clock.getElapsedTime() < 4.7) {
        camera.position.z = 25 + Math.sin(clock.getElapsedTime()) * 15;
      }
    });

    return null;
  }

  return (
    <RocketProvider>
      <DashboardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <RemoveScrollBar />
        <Suspense fallback={<Loading />}>
          <Canvas
            gl={{ antialias: true, pixelRatio: window.devicePixelRatio }}
            camera={{ position: [0, 0, 20] }}
          >
            <CameraMovement />
            <Earth />
            <Sun />
          </Canvas>
        </Suspense>
        <Card data={data} />
        <RocketInfo />
        <UpcomingLaunchesInfo />
        <PastLaunchesInfo />
      </DashboardContainer>
    </RocketProvider>
  );
};
