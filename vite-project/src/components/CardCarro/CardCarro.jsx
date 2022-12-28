import { Link } from "react-router-dom";

export default function CardCarro() {
  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="card mb-3 mt-5 border-0" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
              className="img-fluid rounded"
              alt="bici"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex">
                <div className="input-group ">
                  <button className="btn btn-outline-secondary" type="button">
                    -
                  </button>
                  <button className="px-4 border">1</button>

                  <button className="btn btn-outline-secondary" type="button">
                    +
                  </button>
                </div>
                <button
                  className="btn btn-outline-secondary ms-3"
                  type="button"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
      <div>
      <div className=" d-flex justify-content-center">

      <Link to={"/"} className="btn btn-primary mt-5 mb-5 ms-5">
        Seguir comprando
      </Link>

      <Link to={"/FormasDePago"} className="btn btn-primary mb-5 mt-5 ms-5">
        Realizar pedido
      </Link>
      </div>
      </div>
    </>
  );
}
