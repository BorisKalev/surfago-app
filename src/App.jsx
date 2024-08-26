import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import WakeBoards from "./components/WakeBoards";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
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
const App = () => {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <NewArrivals />
                  <WakeBoards />
                  <Categories />
                </>
              }
            />
            <Route path="/survey" element={<Survey />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/boots" element={<Boots />} />
            <Route path="/accessories" element={<Accessories />} />
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
          <Footer />
        </FavoritesProvider>
      </CartProvider>
    </>
  );
};

export default App;
