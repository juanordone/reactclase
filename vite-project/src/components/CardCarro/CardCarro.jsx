import { Link } from "react-router-dom";

export default function CardCarro() {
  return (
    <>
      <div className="card mb-3  " style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
              className="img-fluid rounded-start"
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
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to={"/"} className="btn btn-primary  ">
        Seguir comprando
      </Link>

      <Link to={"/FormasDePago"} className="btn btn-primary">
        Realizar pedido
      </Link>
    </>
  );
}
