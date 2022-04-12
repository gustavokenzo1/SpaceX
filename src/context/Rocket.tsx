import React, { createContext, useContext, useState } from "react";

type RocketTypes = {
  rocket: string;
  setRocket: (rocket: string) => void;
  rocketsData: any;
  setRocketsData: (rocketsData: any) => void;
  upcomingLaunches: any;
  setUpcomingLaunches: (upcomingLaunches: any) => void;
  upcoming: string;
  setUpcoming: (upcoming: string) => void;
  pastLaunches: any;
  setPastLaunches: (pastLaunches: any) => void;
  past: string;
  setPast: (past: string) => void;
  photoToShow: number;
  setPhotoToShow: (photoToShow: number) => void;
};

const RocketContext = createContext({} as RocketTypes);

export default function RocketProvider({ children }: any) {
  const [rocket, setRocket] = useState("");
  const [rocketsData, setRocketsData] = useState([]);

  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [upcoming, setUpcoming] = useState("");

  const [pastLaunches, setPastLaunches] = useState([]);
  const [past, setPast] = useState("");

  const [photoToShow, setPhotoToShow] = useState(0);

  return (
    <RocketContext.Provider
      value={{
        rocket,
        setRocket,
        rocketsData,
        setRocketsData,
        upcomingLaunches,
        setUpcomingLaunches,
        upcoming,
        setUpcoming,
        pastLaunches,
        setPastLaunches,
        past,
        setPast,
        photoToShow,
        setPhotoToShow,
      }}
    >
      {children}
    </RocketContext.Provider>
  );
}

export function useRocket() {
  const context = useContext(RocketContext);
  const {
    rocket,
    setRocket,
    rocketsData,
    setRocketsData,
    upcomingLaunches,
    setUpcomingLaunches,
    upcoming,
    setUpcoming,
    pastLaunches,
    setPastLaunches,
    past,
    setPast,
    photoToShow,
    setPhotoToShow,
  } = context;

  return {
    rocket,
    setRocket,
    rocketsData,
    setRocketsData,
    upcomingLaunches,
    setUpcomingLaunches,
    upcoming,
    setUpcoming,
    pastLaunches,
    setPastLaunches,
    past,
    setPast,
    photoToShow,
    setPhotoToShow,
  };
}
