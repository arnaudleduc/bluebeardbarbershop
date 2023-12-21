import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
  const { page } = useNavBarStore();

  return (
    <>
      {page === "canvas" && (
        <>
          <Canvas className="canvas">
            <Suspense>
              <Hero />
            </Suspense>
          </Canvas>
          <Loader />
        </>
      )}
      {page !== "canvas" && (
        <>
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
        </>
      )}
    </>
  );
}

export default App;
