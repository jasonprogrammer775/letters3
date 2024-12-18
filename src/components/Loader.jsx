import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="loader"></div>
        <p className="mt-2 text-white">{progress} % loaded</p>
      </div>
    </Html>
  );
}

