import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import SobreNosotros from "./views/SobreNosotros/SobreNosotros";
import Carrito from "./views/Carrito/Carrito";
import FormasDePago from "./views/FormasDePago/FormasDePago";
import Producto from "./views/Producto/Producto";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="SobreNosotros" element={<SobreNosotros />} />
            <Route path="Carrito" element={<Carrito />} />
            <Route path="FormasDePago" element={<FormasDePago />} />
            <Route path="Product/:id" element={<Producto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
