import Carousel from "../../components/Carousel/Carousel";
import BarraBuscador from "../../components/BarraBuscador/BarraBuscador";
import Card from "../../components/Card/Card";
import Opinions from "../../components/Opinions/Opinions";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [itemToSearch, setItemToSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchItemToSearch = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/product/productName/${itemToSearch}`
        );
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError("El producto no existe");
        setProducts([]);
      }
    };
    if (itemToSearch !== "") {
      fetchItemToSearch();
    } else {
      fetchData();
    }
  }, [itemToSearch]);

  return (
    <>
      <Carousel />
      <BarraBuscador
        itemToSearch={itemToSearch}
        setItemToSearch={setItemToSearch}
      />
      <p className="text-uppercase fs-1 fw-semibold text-center text-primary">
        {error}
      </p>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <Card
            key={product.id}
            nombre={product.nombre}
            precio={product.precio}
            id={product.id}
          />
        ))}
      </div>
      <Opinions />
    </>
  );
}
