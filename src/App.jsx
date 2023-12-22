import { Suspense, useRef } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Transition } from "react-transition-group";

import Header from "./components/header/header";
import Index from "./components/index/index";
import Localisation from "./components/localisation/localisation";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Hero from "./components/canvas/canvas";
import Products from "./components/products/products.jsx";

import "./app.css";

import useNavBarStore from "./stores/useNavBar";

function App() {
  const { page, inProp } = useNavBarStore();
  const nodeRef = useRef(null);
  const canvasRef = useRef(null);

  const durationOut = 1000;
  const durationIn = 3000;

  const defaultComponentStyle = {
    transition: `opacity ${durationIn}ms ease-in-out`,
    opacity: 0,
  };

  const defaultCanvasStyle = {
    transition: `opacity ${durationOut}ms ease-in-out`,
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
        timeout={durationOut}
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

      <Transition
        nodeRef={nodeRef}
        in={inProp}
        timeout={durationIn}
        mountOnEnter
      >
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
                <Reviews />
              </>
            )}
            {page === "contact" && <Contact />}
            {page === "products" && <Products />}
            <Footer />
          </div>
        )}
      </Transition>
    </>
  );
}

export default App;
