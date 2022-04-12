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
};

const RocketContext = createContext({} as RocketTypes);

export default function RocketProvider({ children }: any) {
  const [rocket, setRocket] = useState("");
  const [rocketsData, setRocketsData] = useState([]);

  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [upcoming, setUpcoming] = useState("");

  const [pastLaunches, setPastLaunches] = useState([]);
  const [past, setPast] = useState("");

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
  };
}
