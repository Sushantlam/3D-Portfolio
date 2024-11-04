import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const DemoComputer = (props) => {

  const imgRef = useRef()
 
  const txt = props.texture ? props.texture : '/image/project1.png';
  console.log("txx", txt);
  

  // useEffect(() => {
  //   if (txt) {
  //     txt.flipY = false;
  //   }
  // }, [txt]);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current, 
      { rotationY: Math.PI / 2 }, 
      { rotationY: 0, duration: 1, ease: 'power3.out' }
    );
  }, [txt]);

  return (
    <img ref={imgRef} src={txt} className=' h-full' alt="Demo texture" style={{ transform: 'rotateY(90deg)' }} />
  );
};

useGLTF.preload('/models/computer.glb');

export default DemoComputer;