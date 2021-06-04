import CartModal from "./components/Navbar/CartButton/CartModal/CartModal";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
import { ContextProvider } from "./items-context";
import { useState } from "react";
import Backdrop from "./components/Navbar/CartButton/Backdrop/Backdrop";

function App() {
  const [modalShown, setModalShown] = useState(false);

  const showModalHandler = () => {
    setModalShown(true);
  };

  const closeModalHandler = () => {
    setModalShown(false);
  };

  return (
    <ContextProvider>
      <Fragment>
        {modalShown && <Backdrop onClick={closeModalHandler} />}
        {modalShown && <CartModal onClick={closeModalHandler} />}
        <Navbar onClick={showModalHandler} />
        <Header />
        <Main />
        <Footer />
      </Fragment>
    </ContextProvider>
  );
}

export default App;
