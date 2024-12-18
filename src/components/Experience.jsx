import { CameraControls, Text, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";




export const Experience = () => {
  const controls = useRef();
  const scale = window.innerWidth > 768 ? 3 : 1.5; // Larger text on bigger screens


  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    await new Promise((resolve) => setTimeout(resolve, 1600)); // Wait for smoothTime to complete
    controls.current.dolly(22, true);
  };
  

  useEffect(() => {
    intro();
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <Text
        font={"fonts/sovereign.ttf"}
        depth={5}
        position-x={-1.3}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        scale={3}
        color="white"
      >
        Zahl
        <meshBasicMaterial color="white" />
      </Text>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5}/>
     <directionalLight position={[10, 10,5]} intensity={1} />
     
    </>
  );
};
