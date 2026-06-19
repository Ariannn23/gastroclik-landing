"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// ─── QR PATRÓN 13×13 ─────────────────────────────────────────
const QR_DATA: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
];

const QR_SIZE = 13;
const MOD = 0.04;
const GAP = 0.006;
const STEP = MOD + GAP;
const QR_TOTAL = QR_SIZE * STEP;
const QR_BG = QR_TOTAL + 0.12;
const QR_BG_HALF = QR_BG / 2;

const PANEL_W = 2.0;
const PANEL_H = 2.8;

// ─── QR ──────────────────────────────────────────────────────
function QRCode({ zMod }: { zMod: number }) {
  const half = QR_TOTAL / 2;

  const items = useMemo(() => {
    const result: React.ReactNode[] = [];

    QR_DATA.forEach((row, y) => {
      row.forEach((val, x) => {
        if (val === 0) return;

        const px = x * STEP - half + STEP / 2;
        const py = -(y * STEP - half + STEP / 2);

        const fTL = x < 5 && y < 5;
        const fTR = x >= QR_SIZE - 5 && y < 5;
        const fBL = x < 5 && y >= QR_SIZE - 5;

        if (fTL || fTR || fBL) {
          let lx = x,
            ly = y;
          if (fTR) lx = x - (QR_SIZE - 5);
          if (fBL) ly = y - (QR_SIZE - 5);

          const outer = lx === 0 || lx === 4 || ly === 0 || ly === 4;
          const center = lx >= 1 && lx <= 3 && ly >= 1 && ly <= 3;

          if (!outer && !center) return;

          result.push(
            <mesh key={`${x}-${y}`} position={[px, py, zMod]}>
              <boxGeometry args={[MOD, MOD, 0.016]} />
              <meshBasicMaterial color={outer ? "#5a1617" : "#d89600"} />
            </mesh>,
          );
        } else {
          result.push(
            <mesh key={`${x}-${y}`} position={[px, py, zMod]}>
              <boxGeometry args={[MOD, MOD, 0.012]} />
              <meshBasicMaterial color="#1a1a1a" />
            </mesh>,
          );
        }
      });
    });

    return result;
  }, [zMod]);

  return <>{items}</>;
}

function QRCard({ zPos }: { zPos: number }) {
  return (
    <group>
      <mesh position={[0, 0, zPos]}>
        <boxGeometry args={[QR_BG, QR_BG, 0.006]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <QRCode zMod={zPos + (zPos > 0 ? 0.006 : -0.006)} />
    </group>
  );
}

// ─── TEXTO ────────────────────────────────────────────────────
function Bar({
  x,
  y,
  w,
  h = 0.02,
  color = "#ffffff",
  bright = false,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  color?: string;
  bright?: boolean;
}) {
  return (
    <mesh position={[x, y, 0]}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={bright ? 1 : 0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Bullet({ x, y }: { x: number; y: number }) {
  return (
    <mesh position={[x, y, 0]}>
      <circleGeometry args={[0.018, 12]} />
      <meshBasicMaterial color="#d89600" side={THREE.DoubleSide} />
    </mesh>
  );
}

// ─── MENÚ ─────────────────────────────────────────────────────
function MenuSide({ zPos, mirror }: { zPos: number; mirror?: boolean }) {
  const s = mirror ? -1 : 1;
  return (
    <group position={[0.15 * s, 0.25, zPos]} scale={[s, 1, 1]}>
      <Bar x={0} y={1.0} w={0.7} h={0.035} color="#d89600" bright />
      <Bar x={0} y={0.9} w={0.4} h={0.01} color="#d89600" />

      <Bar x={-0.42} y={0.62} w={0.4} h={0.016} color="#5a1617" bright />
      <Bullet x={-0.65} y={0.44} />
      <Bar x={-0.48} y={0.44} w={0.35} />
      <Bar x={0.42} y={0.44} w={0.2} color="#d89600" bright />

      <Bullet x={-0.65} y={0.26} />
      <Bar x={-0.48} y={0.26} w={0.45} />
      <Bar x={0.42} y={0.26} w={0.16} color="#d89600" bright />

      <Bar x={-0.42} y={-0.02} w={0.5} h={0.016} color="#5a1617" bright />
      <Bullet x={-0.65} y={-0.2} />
      <Bar x={-0.48} y={-0.2} w={0.4} />
      <Bar x={0.42} y={-0.2} w={0.26} color="#d89600" bright />

      <Bullet x={-0.65} y={-0.38} />
      <Bar x={-0.48} y={-0.38} w={0.28} />
      <Bar x={0.42} y={-0.38} w={0.22} color="#d89600" bright />

      <Bar x={-0.42} y={-0.62} w={0.35} h={0.016} color="#5a1617" bright />
      <Bullet x={-0.65} y={-0.78} />
      <Bar x={-0.48} y={-0.78} w={0.35} />
      <Bar x={0.42} y={-0.78} w={0.18} color="#d89600" bright />
    </group>
  );
}

// ─── TARJETA ─────────────────────────────────────────────────
function FloatingCard() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.04;
      groupRef.current.rotation.z = Math.sin(t * 0.18) * 0.008;
    }
  });

  const qrX = -(PANEL_W / 2) + QR_BG_HALF + 0.1;
  const qrY = -(PANEL_H / 2) + QR_BG_HALF + 0.1;

  return (
    <group ref={groupRef}>
      {/* Panel base translúcido */}
      <mesh>
        <planeGeometry args={[PANEL_W, PANEL_H]} />
        <meshPhysicalMaterial
          color="#f5f0e8"
          roughness={0.02}
          metalness={0}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          clearcoat={0.5}
          clearcoatRoughness={0.02}
          depthWrite={false}
        />
      </mesh>

      {/* FRONTAL */}
      <MenuSide zPos={0.002} mirror={false} />
      <group position={[qrX, qrY, 0.003]}>
        <Bar x={0} y={QR_BG_HALF + 0.05} w={0.35} h={0.012} color="#d89600" bright />
        <QRCard zPos={0.004} />
      </group>

      {/* TRASERA */}
      <MenuSide zPos={-0.002} mirror={true} />
      <group position={[qrX, qrY, -0.003]}>
        <Bar x={0} y={QR_BG_HALF + 0.05} w={0.35} h={0.012} color="#d89600" bright />
        <QRCard zPos={-0.004} />
      </group>

      {/* Partículas internas sutiles */}
      <Sparkles
        count={4}
        scale={[1.8, 2.6, 0.01]}
        size={0.006}
        speed={0.04}
        opacity={0.15}
        color="#d89600"
      />
    </group>
  );
}

// ─── ESCENA ──────────────────────────────────────────────────
export default function Scene3D_Menu() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 5]} intensity={0.8} />
        <Environment preset="city" blur={0.4} />
        <FloatingCard />
        <Sparkles
          count={8}
          scale={[3, 3, 1]}
          size={0.01}
          speed={0.04}
          opacity={0.1}
          color="#d89600"
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}
