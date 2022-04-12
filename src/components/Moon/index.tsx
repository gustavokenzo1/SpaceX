import { useTexture } from "@react-three/drei";
import MoonMap from "../../assets/moon.jpg";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Moon = () => {
  const [moonMap] = useTexture([MoonMap]);

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
      float intensity = pow(0.8 - dot(vertexNormal, vec3(0, 0, 1)), 2.0);
      gl_FragColor = vec4(0.8, 0.8, 0.8, 1.0) * intensity;
    }
  `;

  const moonRef = useRef<THREE.Object3D>();

  useFrame(({ clock }) => {
    moonRef.current!.translateY(0.01);
    moonRef.current!.translateX(0.01);
  })

  return (
    <>
      <mesh ref={moonRef} position={[0, 5, -50]} rotation={[1, 0, 1]}>
        <sphereGeometry attach="geometry" args={[2, 50, 50]} />
        <meshStandardMaterial attach="material" map={moonMap} />
      </mesh>
      <mesh position={[0, 5, -50]}>
        <sphereGeometry attach="geometry" args={[2.1, 50, 50]} />
        <shaderMaterial
          attach="material"
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};
