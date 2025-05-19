import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

// Types pour les props
interface Dumbbell3DProps {
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  size?: "small" | "medium" | "large";
  rotationSpeed?: number;
  floatIntensity?: number;
}

// Composant principal d'haltère 3D
const Dumbbell3D: React.FC<Dumbbell3DProps> = ({
  position = "bottom-right",
  size = "medium",
  rotationSpeed = 0.5,
  floatIntensity = 1,
}) => {
  // Obtenir la taille correcte basée sur la prop
  const getDimensions = () => {
    switch (size) {
      case "small":
        return { width: 150, height: 150 };
      case "medium":
        return { width: 200, height: 200 };
      case "large":
        return { width: 300, height: 300 };
      default:
        return { width: 200, height: 200 };
    }
  };

  // Obtenir la position correcte basée sur la prop
  const getPositionClass = () => {
    switch (position) {
      case "top-right":
        return "absolute top-24 right-24";
      case "top-left":
        return "absolute top-24 left-24";
      case "bottom-right":
        return "absolute bottom-24 right-24";
      case "bottom-left":
        return "absolute bottom-24 left-24";
      case "center":
        return "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      default:
        return "absolute bottom-24 right-24";
    }
  };

  const { width, height } = getDimensions();
  const positionClass = getPositionClass();

  // Utiliser un canvas sans fond qui ne perturbe pas la mise en page
  return (
    <div
      className={`${positionClass} z-20`}
      style={{
        width,
        height,
        position: "absolute",
        overflow: "visible",
      }}
    >
      <Canvas
        className="!bg-transparent"
        style={{ backgroundColor: "transparent" }}
        gl={{
          alpha: true,
          antialias: true,
          depth: true,
          preserveDrawingBuffer: false,
        }}
        camera={{
          position: [0, 0, 15],
          fov: 40,
          near: 0.1,
          far: 1000,
        }}
      >
        {/* Éclairage amélioré pour mieux voir les haltères */}
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#ffffff"
        />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#88ccff" />
        <spotLight
          position={[0, 5, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          distance={25}
          castShadow
        />

        {/* Animation flottante */}
        <Float
          rotationIntensity={0.3 * floatIntensity}
          floatIntensity={0.5 * floatIntensity}
          speed={2}
        >
          <DumbbellModel rotationSpeed={rotationSpeed} />
        </Float>
      </Canvas>
    </div>
  );
};

// Modèle 3D de l'haltère
function DumbbellModel({ rotationSpeed = 0.5 }) {
  const group = useRef<THREE.Group>(null);

  // Animation de rotation continue
  useFrame((state, delta) => {
    if (group.current) {
      // Rotation automatique sur l'axe Y
      group.current.rotation.y += delta * rotationSpeed;

      // Mouvement d'haltère (légère oscillation sur Z)
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Structure centrée pour éviter les problèmes de coupure */}
      <group position={[0, 0, 0]} scale={0.8}>
        {/* Disque gauche */}
        <mesh
          position={[-3.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[1.2, 1.2, 0.8, 32]} />
          <meshStandardMaterial
            color="#555555"
            metalness={0.9}
            roughness={0.1}
            emissive="#222222"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh
          position={[-3.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          receiveShadow
          castShadow
        >
          <cylinderGeometry args={[0.9, 0.9, 0.82, 32]} />
          <meshStandardMaterial
            color="#777777"
            metalness={0.8}
            roughness={0.2}
            emissive="#333333"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Barre gauche */}
        <mesh
          position={[-2, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.25, 0.25, 2, 16]} />
          <meshStandardMaterial
            color="#999999"
            metalness={0.95}
            roughness={0.05}
            emissive="#333333"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Poignée centrale */}
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[0.35, 0.35, 3, 16]} />
          <meshStandardMaterial
            color="#888888"
            metalness={0.8}
            roughness={0.3}
            emissive="#444444"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Barre droite */}
        <mesh
          position={[2, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.25, 0.25, 2, 16]} />
          <meshStandardMaterial
            color="#999999"
            metalness={0.95}
            roughness={0.05}
            emissive="#333333"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Disque droit */}
        <mesh
          position={[3.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[1.2, 1.2, 0.8, 32]} />
          <meshStandardMaterial
            color="#555555"
            metalness={0.9}
            roughness={0.1}
            emissive="#222222"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh
          position={[3.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[0.9, 0.9, 0.82, 32]} />
          <meshStandardMaterial
            color="#777777"
            metalness={0.8}
            roughness={0.2}
            emissive="#333333"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Dumbbell3D;
