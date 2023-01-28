import Carousel from "../../components/Carousel/Carousel"
import Card from "../../components/Card/Card"
import Opinions from "../../components/Opinions/Opinions"
import { useEffect, useState } from "react";

export default function Home(){
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setProducts]);
    return(
        <>
        <Carousel/>
        {products.map((product) => ( 
        <Card key={product.id} nombre={product.nombre} precio={product.precio}/>))}
        <Opinions/>
        </>
    )
}
