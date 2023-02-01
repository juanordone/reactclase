import CardProducto from "../../components/CardProducto/CardProducto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Producto() {
  const { id } = useParams();
  const [detallesProducto, setDetallesProducto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/product/product/${id}`
        );
        const data = await response.json();
        setDetallesProducto(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CardProducto detallesProducto={detallesProducto} />
    </>
  );
}
