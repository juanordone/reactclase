import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

export default function Buscador() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${name}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <Card />
    </>
  );
}
