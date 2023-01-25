import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card() {
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

  return (
    <>
      <div className="card mb-5 mt-5 ms-5 " style={{ width: "18rem" }}>
        <img
          src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {products.map((product) => (
            <div>
              <h5 className="card-title" key={product.id}>
                {product.nombre}
              </h5>
              <p className="card-text">{product.precio}</p>
              <Link to={"/Producto"} className="btn btn-outline-primary">
                Go somewhere
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
