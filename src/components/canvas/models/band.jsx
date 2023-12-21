/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Float } from "@react-three/drei";

export function Band(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/bannerAnim.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const bandAnimation = actions.KeyAction;
    bandAnimation.clampWhenFinished = true;
    bandAnimation.repetitions = 0;
    bandAnimation.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.08}>
          <mesh
            name="Band"
            castShadow
            receiveShadow
            geometry={nodes.Band.geometry}
            material={materials.band}
            morphTargetDictionary={nodes.Band.morphTargetDictionary}
            morphTargetInfluences={nodes.Band.morphTargetInfluences}
            position={[0, 0, 0.179]}
          />
        </Float>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bannerAnim.glb");
