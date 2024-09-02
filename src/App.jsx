import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import WakeBoards from "./components/WakeBoards";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Accessories from "./pages/Accessories";
import Galerie from "./pages/Galerie";
import Boots from "./pages/Boots";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Survey from "./pages/Survey";
import HandleRopes from "./pages/HandleRopes";
import KneeBoards from "./pages/KneeBoards";
import WakeSurfs from "./pages/WakeSurfs";
import WakeBoardsPage from "./pages/WakeBoardsPage";
import Item from "./pages/Item";
import Boards from "./pages/Boards";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import OnSalePage from "./pages/OnSalePage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pageTransition = { duration: 0.5 };

  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <ScrollToTop />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Hero />
                    <NewArrivals />
                    <WakeBoards />
                    <Categories />
                  </motion.div>
                }
              />
              <Route
                path="/accessories"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Accessories />
                  </motion.div>
                }
              />
              <Route path="/survey" element={<Survey />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/boots" element={<Boots />} />
              <Route path="/newarrivals" element={<NewArrivalsPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/handles-ropes" element={<HandleRopes />} />
              <Route path="/kneeboards" element={<KneeBoards />} />
              <Route path="/wakesurfs" element={<WakeSurfs />} />
              <Route path="/wakeboards" element={<WakeBoardsPage />} />
              <Route path="/boards" element={<Boards />} />
              <Route path="/sale" element={<OnSalePage />} />
              <Route path="/item/:id" element={<Item />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </FavoritesProvider>
      </CartProvider>
    </>
  );
};

export default App;
