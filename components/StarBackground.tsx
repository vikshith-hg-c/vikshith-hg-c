"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.0005, y: 0.0005 }); // Default rotation velocity - very slow
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random sphere positions and filter out any NaN values
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      // Generate random point inside a sphere using rejection sampling
      let x, y, z;
      do {
        x = (Math.random() - 0.5) * 2;
        y = (Math.random() - 0.5) * 2;
        z = (Math.random() - 0.5) * 2;
      } while (x * x + y * y + z * z > 1);

      // Scale to desired radius
      positions[i * 3] = x * 1.2;
      positions[i * 3 + 1] = y * 1.2;
      positions[i * 3 + 2] = z * 1.2;
    }
    setSphere(positions);

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const newX = (event.clientX / window.innerWidth) * 2 - 1;
      const newY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Calculate velocity based on mouse position change with reduced speed
      velocityRef.current.x = (newX - lastMouseRef.current.x) * 0.03;
      velocityRef.current.y = (newY - lastMouseRef.current.y) * 0.03;

      lastMouseRef.current.x = newX;
      lastMouseRef.current.y = newY;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Add velocity to rotation
      rotationRef.current.x += velocityRef.current.y;
      rotationRef.current.y += velocityRef.current.x;

      // No friction - continue moving infinitely until user moves mouse in different direction
      // velocityRef maintains its value and keeps the stars spinning

      // Apply rotation
      ref.current.rotation.x = rotationRef.current.x;
      ref.current.rotation.y = rotationRef.current.y;
    }
  });

  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4AF626"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
