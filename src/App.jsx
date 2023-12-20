import Header from "./components/header/header";
import Index from "./components/index/index";
import Localisation from "./components/localisation/localisation";
import Advices from "./components/advices/advices";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";

import useNavBarStore from "./stores/useNavBar";

function App() {
  const { page } = useNavBarStore();

  return (
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
  );
}

export default App;
