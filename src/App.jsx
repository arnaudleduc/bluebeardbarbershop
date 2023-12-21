import { Suspense, useEffect, useRef } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Transition } from "react-transition-group";

import Header from "./components/header/header";
import Index from "./components/index/index";
import Localisation from "./components/localisation/localisation";
import Advices from "./components/advices/advices";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Hero from "./components/canvas/canvas";

import "./app.css";

import useNavBarStore from "./stores/useNavBar";

function App() {
  const { page, inProp } = useNavBarStore();
  const nodeRef = useRef(null);
  const canvasRef = useRef(null);

  const duration = 1000;

  const defaultComponentStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const defaultCanvasStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const transitionStylesOnEnter = {
    entering: { opacity: 1 },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0 },
    exited: { opacity: 0, visibility: "hidden" },
  };

  const transitionStylesOnExit = {
    entering: { opacity: 1 },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0 },
    exited: { opacity: 0, visibility: "hidden" },
  };

  const setScrollBar = (state) => {
    if (state === "entered") {
      document.getElementById("root").style.overflow = "auto";
    }
  };

  return (
    <>
      <Transition
        nodeRef={canvasRef}
        in={!inProp}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            ref={canvasRef}
            style={{
              ...defaultCanvasStyle,
              ...transitionStylesOnExit[state],
            }}
          >
            <Canvas className="canvas">
              <Suspense>
                <Hero />
              </Suspense>
            </Canvas>
            <Loader />
          </div>
        )}
      </Transition>

      <Transition nodeRef={nodeRef} in={inProp} timeout={duration} mountOnEnter>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultComponentStyle,
              ...transitionStylesOnEnter[state],
              overflow: setScrollBar(state),
            }}
          >
            <Header />
            {page === "index" && (
              <>
                <Index />
                <Localisation />
                <Advices />
              </>
            )}
            {page === "contact" && <Contact />}
            <Footer />
          </div>
        )}
      </Transition>
    </>
  );
}

export default App;
