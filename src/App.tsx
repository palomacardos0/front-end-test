import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProviderUseCart } from "./contexts/useCart";
import { Home } from "./Pages/Home";

function App() {
  return (
    <ProviderUseCart>
      <Header />
      <Home />
      <Footer />
    </ProviderUseCart>
  );
}

export default App;
