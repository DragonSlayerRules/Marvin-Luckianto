import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Line } from "@react-three/drei";

import CanvasLoader from "../components/Loader";

const generateLines = (radius, segments) => {
  const angleIncrement = (2 * Math.PI) / segments;
  const lines = [];

  for (let i = 0; i < segments; i++) {
    const angle = i * angleIncrement;

    const x1 = Math.cos(angle) * radius;
    const y1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle + angleIncrement) * radius;
    const y2 = Math.sin(angle + angleIncrement) * radius;

    lines.push(
      <Line key={i} points={[x1, y1, 0, x2, y2, 0]} color={0x526d82} />
    );
  }

  return lines;
};

const GtrCar = () => {
  const gtr = useGLTF("/asset/zondabarchetta.gltf");

  const carRef = useRef();

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y -= 0.002; // Adjust the rotation speed as desired
    }
  });

  return (
    <mesh ref={carRef}>
      <hemisphereLight intensity={0.15} groundColor={0xffa500} />
      <directionalLight intensity={1} position={[-5, 5, 1]} />
      <spotLight
        position={[20, 0, -80]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[100, 0, 0]}
        angle={45}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, 20, 20]} // Left-front spotlight
        angle={45}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, 20, 20]} // Right-front spotlight
        angle={45}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <spotLight
        position={[-20, -20, -20]} // Left-back spotlight
        angle={45}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[20, -20, -20]} // Right-back spotlight
        angle={45}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/* <pointLight intensity={1} /> */}

      <primitive
        object={gtr.scene}
        scale={4}
        position={[0, -2.5, 6.8]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

// const WireframeBackground = () => {
//   const radius = 10;
//   const segments = 40;
//   const angleIncrement = (2 * Math.PI) / segments;

//   const lines = [];

//   // Generate the spider web lines
//   for (let i = 0; i < segments; i++) {
//     const angle = i * angleIncrement;

//     const x1 = Math.cos(angle) * radius;
//     const y1 = Math.sin(angle) * radius;
//     const x2 = Math.cos(angle + angleIncrement) * radius;
//     const y2 = Math.sin(angle + angleIncrement) * radius;

//     lines.push(
//       <Line key={i} points={[x1, y1, 0, x2, y2, 0]} color={0x2d4059} />
//     );
//   }

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
//       <planeGeometry args={[50, 50]} />
//       <meshBasicMaterial color={0x2d4059} wireframe />
//       {lines}
//     </mesh>
//   );
// };

const WireframeBackground = React.memo(() => {
  const radius = 10;
  const segments = 40;

  const lines = generateLines(radius, segments);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color={0x526d82} wireframe />
      {lines}
    </mesh>
  );
});

WireframeBackground.displayName = "WireframeBackground";

const GtrCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, -30, 30], fov: 10 }}
      gl={{ logarithmicDepthBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <GtrCar />
        <WireframeBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GtrCanvas;
