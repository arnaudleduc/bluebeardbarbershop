/* eslint-disable react/no-unknown-property */
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { Objects } from "./models/objects";
import { Band } from "./models/band";

import "./canvas.css";

import useNavBarStore from "../../stores/useNavBar";

const Hero = () => {
  const mainCamera = useRef();
  const orbitCamera = useRef();
  const redSpot = useRef();
  const blueSpot = useRef();
  const whiteSpot = useRef();
  const [button, setButton] = useState(false);
  const { pageToIndex, setInProp } = useNavBarStore();

  //   useHelper(mainCamera, THREE.CameraHelper, "red");
  //   useHelper(redSpot, THREE.SpotLightHelper, "red");
  //   useHelper(blueSpot, THREE.SpotLightHelper, "blue");
  //   useHelper(whiteSpot, THREE.SpotLightHelper, "yellow");

  let t1;
  useEffect(() => {
    mainCamera.current.lookAt(0, 0.55, 0);
    redSpot.current.target.position.set(0, 1, 0);
    blueSpot.current.target.position.set(0, 1, 0);
    whiteSpot.current.target.position.set(0, 1, 0);

    t1 = setTimeout(() => setButton(true), 4000);

    return () => {
      clearTimeout(t1);
    };
  }, []);

  return (
    <>
      {/* <axesHelper /> */}
      <PerspectiveCamera
        ref={mainCamera}
        makeDefault
        position={[10, 1, 0]}
        near={0.1}
        far={170}
        fov={11}
      />
      {/* <OrbitControls ref={orbitCamera} makeDefault /> */}
      {/* <ambientLight /> */}
      <spotLight
        ref={redSpot}
        position={[1, 0.5, 4]}
        intensity={1000}
        color={"#ff6969"}
        distance={4.06}
      />
      <spotLight
        ref={blueSpot}
        position={[1, 0.5, -4]}
        intensity={1000}
        color={"#7369ff"}
        distance={4.06}
      />
      <spotLight
        ref={whiteSpot}
        position={[3, 1, 0]}
        intensity={80}
        color={"#ffe4d1"}
        distance={4.5}
      />
      <mesh>
        <Objects scale={5} />
        <Band scale={5} position={[0, 0, -0.85]} />
      </mesh>
      <Html wrapperClass="enter-website">
        <button
          className={button ? "enter-website-button" : "disabled"}
          onClick={() => {
            pageToIndex();
            setInProp();
          }}
        >
          Entrer
        </button>
      </Html>
    </>
  );
};

export default Hero;
