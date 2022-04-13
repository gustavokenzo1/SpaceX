import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import SunMap from "../../assets/sun.jpg";

export const Sun = () => {
  const [sunMap] = useTexture([SunMap]);

  const currentTime = new Date().getUTCHours();

  const sunRef = useRef<THREE.Object3D>();
  const [sunX, setSunX] = useState(0);
  const [sunZ, setSunZ] = useState(0);
  const [lightX, setLightX] = useState(0);
  const [lightZ, setLightZ] = useState(0);

  /* 
    3h = x: 0, z: -500
    6h = x: 500, z: -500
    9h = x: 500 z: 0  
    12h = x: 500 z: 500
    15h = x: 0 z: 500
    18h = x: -500 z: 500
    21h = x: -500 z: 0
    24h = x: -500 z: -500
  */

  useEffect(() => {
    if (currentTime >= 0 && currentTime < 3) {
      setSunX(-400);
      setSunZ(-400);
      setLightX(-300);
      setLightZ(-300);
    } else if (currentTime >= 3 && currentTime < 6) {
      setSunX(0);
      setSunZ(-400);
      setLightX(0);
      setLightZ(-300);
    } else if (currentTime >= 6 && currentTime < 9) {
      setSunX(400);
      setSunZ(-400);
      setLightX(300);
      setLightZ(-300);
    } else if (currentTime >= 9 && currentTime < 12) {
      setSunX(400);
      setSunZ(0);
      setLightX(300);
      setLightZ(0);
    } else if (currentTime >= 12 && currentTime < 15) {
      setSunX(400);
      setSunZ(400);
      setLightX(0);
      setLightZ(300);
    } else if (currentTime >= 15 && currentTime < 18) {
      setSunX(0);
      setSunZ(400);
      setLightX(-300);
      setLightZ(300);
    } else if (currentTime >= 18 && currentTime < 21) {
      setSunX(-400);
      setSunZ(400);
      setLightX(-300);
      setLightZ(0);
    } else if (currentTime >= 21 && currentTime <= 24) {
      setSunX(-400);
      setSunZ(-400);
      setLightX(-300);
      setLightZ(-300);
    }
  }, []);

  return (
    <>
      <pointLight position={[lightX, 5, lightZ]} intensity={1} color="white" />
      <mesh ref={sunRef} position={[sunX, 0, sunZ]} rotation={[1, 0, 1]}>
        <sphereGeometry attach="geometry" args={[50, 50, 50]} />
        <meshStandardMaterial attach="material" map={sunMap} />
      </mesh>
    </>
  );
};
