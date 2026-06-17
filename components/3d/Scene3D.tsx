"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";

function PhoneModel() {
  const logoTexture = useTexture("/images/ICONLOGO.png");

  return (
    <Float speed={1.6} rotationIntensity={0.14} floatIntensity={0.7} floatingRange={[-0.05, 0.05]}>
      <group scale={0.82} rotation={[0.03, -0.04, -0.04]}>
        <RoundedBox args={[2.45, 4.9, 0.3]} radius={0.24} smoothness={14}>
          <meshStandardMaterial color="#050505" roughness={0.18} metalness={0.9} />
        </RoundedBox>

        {/* Pantalla blanca limpia */}
        <mesh position={[0, 0, 0.17]}>
          <planeGeometry args={[2.16, 4.45]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.03}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0.06}
            emissive="#ffffff"
            emissiveIntensity={0.55}
          />
        </mesh>

        {/* Logo frontal centrado */}
        <mesh position={[0, 0.05, 0.21]}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshBasicMaterial map={logoTexture} transparent toneMapped={false} />
        </mesh>

        {/* Isla de cámara frontal */}
        <RoundedBox
          args={[0.62, 0.2, 0.04]}
          radius={0.1}
          smoothness={10}
          position={[0, 2.02, 0.205]}
        >
          <meshStandardMaterial color="#080808" roughness={0.22} metalness={0.5} />
        </RoundedBox>

        {/* Cámara frontal negra */}
        <mesh position={[-0.17, 2.02, 0.235]}>
          <circleGeometry args={[0.055, 48]} />
          <meshPhysicalMaterial
            color="#020202"
            roughness={0.08}
            metalness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.04}
          />
        </mesh>

        {/* Sensor */}
        <mesh position={[0.14, 2.02, 0.236]}>
          <circleGeometry args={[0.032, 32]} />
          <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.6} />
        </mesh>

        {/* Parte trasera sin logo */}
        <mesh position={[0, 0, -0.17]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[2.08, 4.35]} />
          <meshStandardMaterial color="#111111" roughness={0.55} metalness={0.35} />
        </mesh>

        {/* Módulo de cámara trasera */}
        <RoundedBox
          args={[0.82, 0.82, 0.08]}
          radius={0.16}
          smoothness={10}
          position={[-0.55, 1.55, -0.24]}
        >
          <meshStandardMaterial color="#191919" roughness={0.22} metalness={0.85} />
        </RoundedBox>

        {[
          [-0.72, 1.72, -0.29],
          [-0.38, 1.72, -0.29],
          [-0.72, 1.38, -0.29],
        ].map((position, index) => (
          <mesh key={index} position={position as [number, number, number]}>
            <circleGeometry args={[0.13, 48]} />
            <meshPhysicalMaterial
              color="#050505"
              roughness={0.08}
              metalness={0.7}
              clearcoat={1}
              clearcoatRoughness={0.04}
            />
          </mesh>
        ))}

        <mesh position={[-0.38, 1.38, -0.295]}>
          <circleGeometry args={[0.055, 32]} />
          <meshStandardMaterial
            color="#fff4ca"
            emissive="#fff0ad"
            emissiveIntensity={0.9}
            roughness={0.25}
          />
        </mesh>

        {/* Botones laterales */}
        <mesh position={[1.25, 0.65, 0]}>
          <boxGeometry args={[0.055, 0.55, 0.13]} />
          <meshStandardMaterial color="#242424" roughness={0.2} metalness={0.9} />
        </mesh>

        <mesh position={[-1.25, 0.75, 0]}>
          <boxGeometry args={[0.055, 0.42, 0.13]} />
          <meshStandardMaterial color="#242424" roughness={0.2} metalness={0.9} />
        </mesh>

        <mesh position={[-1.25, 0.22, 0]}>
          <boxGeometry args={[0.055, 0.42, 0.13]} />
          <meshStandardMaterial color="#242424" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="relative w-full  px-6 py-10 md:px-10 md:py-14">
      <div className="h-[560px] w-full md:h-[640px] lg:h-[700px]">
        <Canvas
          camera={{ position: [0, 0, 8.8], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[4, 5, 6]} intensity={1.35} />

          <spotLight
            position={[-4, 5, 5]}
            angle={0.35}
            penumbra={0.8}
            intensity={0.9}
            color="#c8a96e"
          />

          <Environment preset="city" />

          <PhoneModel />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.55}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
}
