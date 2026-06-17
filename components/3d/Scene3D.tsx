"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, RoundedBox, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// ─── QR PATRÓN REALISTA 21×21 ─────────────────────────────────
const QR_MATRIX: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
];

const QR_SIZE = 21;
const MODULE_SIZE = 0.14;
const GAP = 0.025;
const STEP = MODULE_SIZE + GAP;
const CARD_WIDTH = QR_SIZE * STEP + 1.2;
const CARD_HEIGHT = QR_SIZE * STEP + 1.2;
const CARD_THICKNESS = 0.25;

// ─── MÓDULO QR ───────────────────────────────────────────────
function QrModule({
  position,
  height,
  color,
  emissive,
}: {
  position: [number, number, number];
  height: number;
  color: string;
  emissive?: string;
}) {
  return (
    <mesh position={position}>
      <RoundedBox args={[MODULE_SIZE, MODULE_SIZE, height]} radius={0.02} smoothness={3}>
        <meshPhysicalMaterial
          color={color}
          roughness={0.3}
          metalness={0.15}
          clearcoat={0.1}
          emissive={emissive || color}
          emissiveIntensity={emissive ? 0.2 : 0}
        />
      </RoundedBox>
    </mesh>
  );
}

// ─── GENERA LOS MÓDULOS DEL QR PARA UNA CARA ─────────────────
function useQRModules(zPos: number, inverted = false) {
  return useMemo(() => {
    const items: React.ReactNode[] = [];
    const totalSize = QR_SIZE * STEP;
    const half = totalSize / 2;

    QR_MATRIX.forEach((row, y) => {
      row.forEach((val, x) => {
        const moduleVal = inverted ? (val === 1 ? 0 : 1) : val;
        if (moduleVal === 0) return;

        const px = x * STEP - half + STEP / 2;
        const py = -(y * STEP - half + STEP / 2);

        const fTL = x < 7 && y < 7;
        const fTR = x >= QR_SIZE - 7 && y < 7;
        const fBL = x < 7 && y >= QR_SIZE - 7;

        if (fTL || fTR || fBL) {
          let lx = x,
            ly = y;
          if (fTR) lx = x - (QR_SIZE - 7);
          if (fBL) ly = y - (QR_SIZE - 7);

          const outer = lx === 0 || lx === 6 || ly === 0 || ly === 6;
          const center = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;

          if (!outer && !center) return;

          items.push(
            <QrModule
              key={`${x}-${y}`}
              position={[px, py, zPos]}
              height={outer ? 0.16 : 0.22}
              color={outer ? "#5a1617" : "#d89600"}
              emissive={outer ? "#5a1617" : "#d89600"}
            />,
          );
        } else {
          items.push(
            <QrModule key={`${x}-${y}`} position={[px, py, zPos]} height={0.12} color="#0a0a0a" />,
          );
        }
      });
    });

    return items;
  }, [zPos, inverted]);
}

// ─── MODELO QR 3D ────────────────────────────────────────────
function QRCardModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
    groupRef.current.rotation.z = Math.sin(t * 0.25) * 0.008;
  });

  const totalSize = QR_SIZE * STEP;
  const halfThick = CARD_THICKNESS / 2;
  const frontModules = useQRModules(halfThick + 0.01);
  const backModules = useQRModules(-halfThick - 0.01, false);

  return (
    <group ref={groupRef}>
      {/* Base de la tarjeta blanca puro */}
      <RoundedBox args={[CARD_WIDTH, CARD_HEIGHT, CARD_THICKNESS]} radius={0.2} smoothness={8}>
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          metalness={0}
          clearcoat={0.6}
          clearcoatRoughness={0.05}
          emissive="#ffffff"
          emissiveIntensity={0.08}
        />
      </RoundedBox>

      {/* QR en la cara frontal */}
      {frontModules}

      {/* QR en la cara trasera (invertido) */}
      {backModules}

      {/* Partículas doradas */}
      <Sparkles
        count={15}
        scale={[CARD_WIDTH + 0.8, CARD_HEIGHT + 0.8, 0.5]}
        size={0.05}
        speed={0.2}
        opacity={0.35}
        color="#d89600"
      />
    </group>
  );
}

// ─── ESCENA PRINCIPAL ─────────────────────────────────────────
export default function Scene3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true, outputColorSpace: "srgb" }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 5]} intensity={1.5} />
        <directionalLight position={[-3, 3, -2]} intensity={0.4} color="#d89600" />

        <spotLight
          position={[-4, 6, 4]}
          angle={0.35}
          penumbra={0.8}
          intensity={0.4}
          color="#c8a96e"
        />

        <Environment preset="city" blur={0.3} />

        <QRCardModel />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
