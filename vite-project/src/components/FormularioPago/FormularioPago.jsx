export default function FormularioPago() {
  return (
    <div className="row g-5 m-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Tu carro</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Nombre del producto</h6>
              <small className="text-muted">Breve descripción</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Segundo producto</h6>
              <small className="text-muted">Breve descripción</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Tercer elemento</h6>
              <small className="text-muted">Breve descripción</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Código promocional</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Código Promo"
            />
            <button type="submit" className="btn btn-secondary">
              Aplicar
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Dirección de envio</h4>
        <form className="needs-validation" novalidate="" />
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              value=""
              required=""
            />
            <div className="invalid-feedback">
              Se requiere un nombre válido.
            </div>
          </div>
          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              value=""
              required=""
            />
            <div className="invalid-feedback">Se requiere apellido válido.</div>
          </div>
          <div className="col-12">
            <label for="username" className="form-label">
              Nombre de usuario
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Nombre de usuario"
                required=""
              />
              <div className="invalid-feedback">
                Tu nombre de usuario es requerido.
              </div>
            </div>
          </div>
          <div className="col-12">
            <label for="email" className="form-label">
              Email <span className="text-muted">(Opcional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tu@example.com"
            />
            <div className="invalid-feedback">
              Ingresa una dirección de correo electrónico válida para
              actualizaciones de envío.
            </div>
          </div>
          <div className="col-12">
            <label for="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div className="invalid-feedback">
              Por favor introduce tu direccion de envio. Please enter your
              shipping address.
            </div>
          </div>
          <div className="col-12">
            <label for="address2" className="form-label">
              Dirección 2 <span className="text-muted">(Opcional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartamento o suite"
            />
          </div>
          <div className="col-md-5">
            <label for="country" className="form-label">
              País
            </label>
            <select className="form-select" id="country" required="">
              <option value="">Elige...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">Selecciona un país válido.</div>
          </div>
          <div className="col-md-4">
            <label for="state" className="form-label">
              Estado
            </label>
            <select className="form-select" id="state" required="">
              <option value="">Elige...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Proporciona un estado válido.
            </div>
          </div>
          <div className="col-md-3">
            <label for="zip" className="form-label">
              Código postal
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">Código postal requerido.</div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
          />
          <label className="form-check-label" for="same-address">
            La dirección de envío es la misma que mi dirección de facturación
          </label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label" for="save-info">
            Guardar esta información para la próxima vez
          </label>
        </div>
        <hr className="my-4" />
        <h4 className="mb-3">Pago</h4>
        <div className="my-3">
          <div className="form-check">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              checked=""
              required=""
            />
            <label className="form-check-label" for="credit">
              Tarjeta de crédito
            </label>
          </div>
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required=""
            />
            <label className="form-check-label" for="debit">
              Tarjeta de débito
            </label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required=""
            />
            <label className="form-check-label" for="paypal">
              PayPal
            </label>
          </div>
        </div>
        <div className="row gy-3">
          <div className="col-md-6">
            <label for="cc-name" className="form-label">
              Nombre en la tarjeta
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder=""
              required=""
            />
            <small className="text-muted">
              Nombre completo como se muestra en la tarjeta
            </small>
            <div className="invalid-feedback">
              Se requiere el nombre en la tarjeta
            </div>
          </div>
          <div className="col-md-6">
            <label for="cc-number" className="form-label">
              Número de tarjeta de crédito
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">
              Se requiere número de tarjeta de crédito
            </div>
          </div>
          <div className="col-md-3">
            <label for="cc-expiration" className="form-label">
              Vencimiento
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">
              Fecha de vencimiento requerida
            </div>
          </div>
          <div className="col-md-3">
            <label for="cc-cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">
              Código de seguridad requerido
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          PAGAR
        </button>
      </div>
    </div>
  );
}
