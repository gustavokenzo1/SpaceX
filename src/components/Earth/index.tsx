import { Html, OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

import ColorMap from "../../assets/8k_earth_daymap.jpg";
import NormalMap from "../../assets/8k_earth_normal_map.jpg";
import CloudsMap from "../../assets/8k_earth_clouds.jpg";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Earth = () => {
  const [colorMap, cloudsMap, normalMap] = useTexture([
    ColorMap,
    CloudsMap,
    NormalMap,
  ]);
  const cloudsRef = useRef<THREE.Object3D>();
  const [KSCClicked, setKSCClicked] = useState(false);
  const [bocaChicaCliked, setBocaChicaClicked] = useState(false);

  useFrame(({ clock, camera }) => {
    cloudsRef.current!.rotation.y = clock.getElapsedTime() / 120;

    if (clock.getElapsedTime() > 5) {
      setBocaChicaOpacity(0.8)
      setKSCOpacity(0.8)
    }

    if (KSCClicked) {
      const current_pos = camera.position.clone();
      const goal_pos = camera.position.set(0.78, 3.13, 5.87);

      camera.position.lerpVectors(current_pos, goal_pos, 0.1);

      if (current_pos.distanceTo(goal_pos) < 0.1) {
        setKSCClicked(false);
        setBocaChicaHeight(18);
        setBocaChicaWidth(70)
      }
    } else if (bocaChicaCliked) {
      const current_pos = camera.position.clone();
      const goal_pos = camera.position.set(-1.28, 3.21, 6.23);

      camera.position.lerpVectors(current_pos, goal_pos, 0.1);

      if (current_pos.distanceTo(goal_pos) < 0.1) {
        setBocaChicaClicked(false);
        setKSCHeight(18);
        setKSCWidth(170)
      }
    }
  });

  const atmosphereVertex = `
    varying vec3 vertexNormal;

    void main() {
      vertexNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
    }
  `;

  const atmosphereFragment = `
    varying vec3 vertexNormal;

    void main() {
      float intensity = pow(0.7 - dot(vertexNormal, vec3(0, 0, 1)), 2.0);
      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
    }
  `;

  function findCoordinates(lat: number, lon: number) {
    const lat_rad = ((55 - lat) * Math.PI) / 180;
    const lon_rad = ((190 - lon) * Math.PI) / 180;

    const x = 5 * -Math.sin(lat_rad) * Math.cos(lon_rad);
    const y = 5 * Math.sin(lat_rad) * Math.sin(lon_rad);
    const z = 5 * Math.cos(lat_rad);

    return { x, y, z };
  }

  const KSCCoordinates = {
    lat: 28.57,
    lon: 80.6,
  };

  const BocaChicaCoordinates = {
    lat: 26,
    lon: 97,
  };

  const KSCCartesian = findCoordinates(KSCCoordinates.lat, KSCCoordinates.lon);
  const BocaChicaCartesian = findCoordinates(
    BocaChicaCoordinates.lat,
    BocaChicaCoordinates.lon
  );

  const [KSCHeight, setKSCHeight] = useState(18);
  const [BocaChicaHeight, setBocaChicaHeight] = useState(18);
  const [KSCWidth, setKSCWidth] = useState(170);
  const [BocaChicaWidth, setBocaChicaWidth] = useState(70);
  const [KSCOpacity, setKSCOpacity] = useState(0);
  const [BocaChicaOpacity, setBocaChicaOpacity] = useState(0);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 0, 7]} intensity={2} />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
      <mesh>
        <sphereGeometry attach="geometry" args={[5, 50, 50]} />
        <meshStandardMaterial
          attach="material"
          map={colorMap}
          normalMap={normalMap}
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[5, 50, 50]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry attach="geometry" args={[5.01, 50, 50]} />
        <meshPhongMaterial
          attach="material"
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        position={[
          KSCCartesian.x - 0.1,
          KSCCartesian.y + 0.5,
          KSCCartesian.z + 0.1,
        ]}
        rotation={[-0.5, 0.2, 0]}
      >
        <ringGeometry attach="geometry" args={[0.1, 0.11, 50, 50]} />
        <meshBasicMaterial
          attach="material"
          color={0xffffff}
          side={THREE.DoubleSide}
        />
        <Html>
          <div
            className="label"
            style={{
              margin: "20px",
              padding: "10px",
              background: "rgba(0, 0, 0)",
              borderRadius: "0.5rem",
              width: KSCWidth,
              height: KSCHeight,
              overflow: "hidden",
              transition: "0.3s",
              cursor: "pointer",
              opacity: KSCOpacity,
            }}
            onClick={() => {
              setKSCHeight(KSCHeight === 18 ? 120 : 18);
              setKSCWidth(KSCWidth === 170 ? 200 : 170);
              setKSCClicked(true);
            }}
          >
            Kennedy Space Center
            <img
              style={{ width: 200, marginTop: 10, borderRadius: "0.5rem" }}
              src={"https://www.falandodeviagem.com.br/imagens20/KSC.jpg"}
              alt="Kennedy Space Center"
            />
          </div>
        </Html>
      </mesh>
      <mesh
        position={[
          BocaChicaCartesian.x - 0.7,
          BocaChicaCartesian.y,
          BocaChicaCartesian.z + 0.1,
        ]}
        rotation={[-0.4, -0.2, 0]}
      >
        <ringGeometry attach="geometry" args={[0.1, 0.11, 50, 50]} />
        <meshBasicMaterial
          attach="material"
          color={0xffffff}
          side={THREE.DoubleSide}
        />
        <Html>
          <div
            className="label"
            style={{
              margin: "20px",
              padding: "10px",
              background: "rgba(0, 0, 0)",
              borderRadius: "0.5rem",
              width: BocaChicaWidth,
              marginRight: "100px",
              height: BocaChicaHeight,
              overflow: "hidden",
              transition: "0.3s",
              cursor: "pointer",
              opacity: BocaChicaOpacity,
            }}
            onClick={() => {
              setBocaChicaHeight(BocaChicaHeight === 18 ? 140 : 18);
              setBocaChicaWidth(BocaChicaWidth === 70 ? 200 : 70);
              setBocaChicaClicked(true);
            }}
          >
            StarBase
            <img
              style={{ width: 200, marginTop: 10, borderRadius: "0.5rem" }}
              src={
                "https://files.tecnoblog.net/wp-content/uploads/2021/02/spacex-starship.jpg"
              }
              alt="Kennedy Space Center"
            />
          </div>
        </Html>
      </mesh>
    </>
  );
};
