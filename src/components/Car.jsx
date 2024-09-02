import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import useWindowDimensions from "./useWindowDimensions";

const Car = () => {
  const model = useGLTF("/3d_scan_man_1/scene.gltf");
  const modalRef = React.useRef();
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  console.log(meshes);
  const { scrollYProgress } = useScroll();
  const { height, width } = useWindowDimensions();
  const [h, setH] = useState(3);
  const [w, setW] = useState(1);

  useFrame((state, delta) => {
    const normalizedScroll = scrollYProgress.current * height; // Calculate the normalized scroll value
    const rotationY = (normalizedScroll / height) * Math.PI * 2; // Rotate based on normalized scroll
    // modalRef.current.scale.set(2, 2, 2);
    modalRef.current.rotation.y = rotationY;
  });

  

  useEffect(() => {
    if (width < 768) {
      setW(0);
    }
  }, [width]);

  return (
    <group
      ref={modalRef}
      scale={[2, 2, 2]}
      rotation={[-Math.PI / h, 0, 0]}
      position={[w, -0.5, 0]}
    >
      <primitive object={model.scene} />
    </group>
  );
};

export default Car;
