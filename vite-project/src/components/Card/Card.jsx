import { Link } from "react-router-dom";

export default function Card({ nombre, precio, id }) {
  return (
    <>
      <div>
        <div className="card mb-5 mt-5 ms-5 " style={{ width: "18rem" }}>
          <img
            src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div>
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">
                {precio}
                <i className="bi bi-currency-euro"></i>
              </p>
              <Link to={`/Product/${id}`} className="btn btn-primary btn-lg">
                <i className="bi bi-plus-circle"></i> Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
