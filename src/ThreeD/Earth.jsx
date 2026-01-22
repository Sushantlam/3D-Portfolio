import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from "gsap";

const Earth = (props) => {
  const targetRef = useRef()
  let scene = null;

  try {
    const gltf = useGLTF('/models/target-stand/model.gltf') 
    scene = gltf.scene
  } catch (err) {
    console.error("GLTF model failed to load:", err)
  }

  React.useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  if (!scene) return null; 

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Earth;
