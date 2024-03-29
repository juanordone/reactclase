export default function CardProducto({ detallesProducto }) {
  return (
    <div>
      <div
        className="d-flex align-items-center mb-5 mt-5 p-5"
        key={detallesProducto.id}
      >
        <div className="flex-shrink-0">
          <img
            src="https://www.maillotmag.com/sites/default/files/orbea_orca_omx_fund_euskadi_2.jpg"
            alt="..."
          />
        </div>

        <div className="flex-grow-1 ms-3">
          <p className="fs-1 fw-bold text-center">{detallesProducto.nombre}</p>
          <p className="fs-3 text-center">
            {" "}
            Es estética, elegante, económica, rápida y única. La OMX ofrece el
            mejor equilibrio que encontrarás en el mercado.
          </p>
          <p className="fs-1 fw-bold ">
            {detallesProducto.precio}
            <i className="bi bi-currency-euro"></i>
          </p>
          <div className="d-grid gap-2 p-3">
            <a className="btn btn-primary btn-lg">Añadir al carro</a>
          </div>
        </div>
      </div>
    </div>
  );
}
