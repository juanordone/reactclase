import {Link} from "react-router-dom"

export default function Card() {
  return (
    <>
      <div className="card mb-5 mt-5 ms-5 " style={{ width: "18rem" }}>
        <img
          src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={"/Producto"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
}
