"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Environment } from "@react-three/drei";

function FloatingMenu() {
  return (
    <Float
      speed={2} 
      rotationIntensity={1.5} 
      floatIntensity={2} 
      floatingRange={[-0.1, 0.1]}
    >
      {/* Geometría simulando una carta o móvil */}
      <mesh rotation={[0.5, -0.5, 0]}>
        <boxGeometry args={[2.5, 4, 0.2]} />
        <meshStandardMaterial color="#5A1617" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Detalle dorado simulando la pantalla o diseño */}
      <mesh rotation={[0.5, -0.5, 0]} position={[0, 0, 0.11]}>
        <planeGeometry args={[2.3, 3.8]} />
        <meshStandardMaterial color="#FFF1D8" roughness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        <FloatingMenu />
        
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4} 
          color="#3B1D1A"
        />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
