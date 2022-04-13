import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Falcon = () => {
  const falconRef = useRef<THREE.Object3D>();

  const [showAbout, setShowAbout] = useState(false);

  useFrame(({ clock }) => {
    if (falconRef.current) {
      falconRef.current!.position.z =
        Math.sin(clock.getElapsedTime() / 20) * 10;
      falconRef.current!.position.x =
        Math.cos(clock.getElapsedTime() / 20) * 10;

      falconRef.current!.rotation.x = clock.getElapsedTime() / 10;
      falconRef.current!.rotation.y = clock.getElapsedTime() / 10;
    }
  });

  return (
    <mesh scale={0.3} position={[0, 0, 7]} ref={falconRef}>
      {/* <mesh position={[0, 0, 0]}>
        <cylinderGeometry attach="geometry" args={[0.3, 0.3, 4, 32]} />
        <meshStandardMaterial attach="material" color="white" metalness={0.5} />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry attach="geometry" args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial attach="material" color="black" metalness={0.5} />
      </mesh> */}
      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry attach="geometry" args={[0.1, 0.4, 0.5, 32]} />
        <meshStandardMaterial
          attach="material"
          color="gray"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 3.6125, 0]}>
        <cylinderGeometry attach="geometry" args={[0.3, 0.3, 1.2, 32]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 4, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry attach="geometry" args={[0.4, 0.8, 32]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 5.05, 0]}>
        <cylinderGeometry attach="geometry" args={[0.4, 0.4, 1.3, 32]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 5.85, 0]}>
        <cylinderGeometry attach="geometry" args={[0.07, 0.4, 0.3, 32]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          metalness={0.5}
          roughness={0.3}
        />
        <Html>
          <div
            className="label"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              borderRadius: showAbout ? "0.5rem" : "50%",
              width: showAbout ? "300px" : "30px",
              height: showAbout ? "250px" : "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: showAbout ? 0.8 : 0.5,
              cursor: "pointer",
              flexDirection: "column",
              padding: showAbout ? "2rem" : "0rem",
              textAlign: "center",
              transition: "0.3s",
              overflow: "hidden"
            }}
            onClick={() => setShowAbout(!showAbout)}
          >
            {!showAbout
              ? "?"
              : "Oh, look! It's the second stage of the Falcon 9 rocket! Why is it just wandering around though? I wonder if this is because fuel prices are too high and they couldn't put enough..."}
            {showAbout && (
              <img
                src={
                  "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/08/artist_s_view_of_sentinel-6_during_falcon_9_fairing_release/22185610-3-eng-GB/Artist_s_view_of_Sentinel-6_during_Falcon_9_fairing_release_pillars.jpg"
                }
                style={{
                  width: 230,
                  marginTop: 10,
                  borderRadius: "0.5rem",
                }}
                alt="Falcon 9 Second Stage"
              />
            )}
          </div>
        </Html>
      </mesh>
    </mesh>
  );
};
