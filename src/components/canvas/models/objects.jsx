/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  MeshTransmissionMaterial,
  Float,
  useProgress,
} from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

export function Objects(props) {
  const group = useRef();
  const insidePole = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/blueBeardBannerAnim.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    insidePole.current.rotation.y += delta * 1.5;
  });

  useEffect(() => {
    const introAnimation = actions.objectsAnimation;
    introAnimation.clampWhenFinished = true;
    introAnimation.repetitions = 0;
    introAnimation.play();
    // progress === 100 &&
    //   setTimeout(() => {
    //     introAnimation.play();
    //   }, 2000);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="crown" position={[-0.009, 0.422, -0.006]}>
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.gold}
          />
          <mesh
            name="Circle003_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.fabric}
          />
          <mesh
            name="Circle003_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials.pearl}
          />
        </group>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
          <mesh
            name="handle"
            castShadow
            receiveShadow
            geometry={nodes.handle.geometry}
            material={materials.woodHandle}
            position={[-0.067, 0.064, -0.511]}
            scale={0.852}
          >
            <mesh
              name="blade"
              castShadow
              receiveShadow
              geometry={nodes.blade.geometry}
              material={materials.metal}
              position={[0, 0, 0.086]}
            />
            <mesh
              name="screw1"
              castShadow
              receiveShadow
              geometry={nodes.screw1.geometry}
              material={materials.metal}
              position={[0, 0, 0.086]}
              scale={[0.582, 1, 1]}
            />
            <mesh
              name="screw2"
              castShadow
              receiveShadow
              geometry={nodes.screw2.geometry}
              material={materials.metal}
              position={[0, -0.012, -0.001]}
              scale={[0.724, 1, 1]}
            />
            <mesh
              name="screw3"
              castShadow
              receiveShadow
              geometry={nodes.screw3.geometry}
              material={materials.metal}
              position={[0, 0.001, -0.088]}
              scale={[0.797, 1, 1]}
            />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
          <mesh
            name="handle001"
            castShadow
            receiveShadow
            geometry={nodes.handle001.geometry}
            material={materials.woodHandle}
            position={[-0.055, 0.064, 0.563]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.852}
          >
            <mesh
              name="blade001"
              castShadow
              receiveShadow
              geometry={nodes.blade001.geometry}
              material={materials.metal}
              position={[0, 0, 0.086]}
            />
            <mesh
              name="screw1001"
              castShadow
              receiveShadow
              geometry={nodes.screw1001.geometry}
              material={materials.metal}
              position={[0, 0, 0.086]}
              scale={[0.582, 1, 1]}
            />
            <mesh
              name="screw2001"
              castShadow
              receiveShadow
              geometry={nodes.screw2001.geometry}
              material={materials.metal}
              position={[0, -0.012, -0.001]}
              scale={[0.724, 1, 1]}
            />
            <mesh
              name="screw3001"
              castShadow
              receiveShadow
              geometry={nodes.screw3001.geometry}
              material={materials.metal}
              position={[0, 0.001, -0.088]}
              scale={[0.797, 1, 1]}
            />
          </mesh>
        </Float>
        <mesh
          name="pole"
          castShadow
          receiveShadow
          geometry={nodes.pole.geometry}
          material={materials.metalDark}
          position={[0, -0.21, 0]}
          rotation={[0, 1.396, 0]}
        />
        <mesh
          ref={insidePole}
          name="rendAndBlue"
          castShadow
          receiveShadow
          geometry={nodes.rendAndBlue.geometry}
          material={materials.barberPole}
          position={[0, -0.21, 0]}
          rotation={[0, 1.396, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/blueBeardBannerAnim.glb");
