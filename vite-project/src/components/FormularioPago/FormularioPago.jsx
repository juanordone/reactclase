import { useFormik } from "formik";
import { initialValues } from "./utils/form";
import { BasicFormSchema } from "./BasicFormSchema";

export default function FormularioPago() {
  const onSubmit = async (values, actions) => {
    console.log("values");
    console.log(actions);

    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: BasicFormSchema,
    onSubmit,
  });
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

          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Dirección de envio</h4>
        <form
          className="needs-validation"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                value={values.nombre}
                onChange={handleChange}
                type="text"
                onBlur={handleBlur}
                className={
                  errors.nombre && touched.nombre
                    ? "form-control is-invalid"
                    : "form-control "
                }
                id="nombre"
                placeholder="Nombre"
              />

              <div
                className={
                  errors.nombre && touched.nombre
                    ? "invalid-feedback is-invalid"
                    : ""
                }
              >
                {errors.nombre}
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Introduce Apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                required=""
              />
              <div
                className={
                  errors.apellido && touched.apellido ? "invalid-feedback" : ""
                }
              >
                {errors.apellido}
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange}
                className="form-control"
                id="email"
                placeholder="tu@ejemplo.com"
                value={values.email}
              />
              <div
                className={
                  errors.email && touched.email ? "invalid-feedback" : ""
                }
              >
                {errors.email}
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="direccion"
                placeholder="C/, AVD. nº..."
                required=""
                value={values.direccion}
              />
              <div
                className={
                  errors.direccion && touched.direccion
                    ? "invalid-feedback"
                    : ""
                }
              >
                {errors.direccion}
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="direccion2" className="form-label">
                Dirección 2 <span className="text-muted">(Opcional)</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="direccion2"
                placeholder="Apartamento"
                value={values.direccion2}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                País
              </label>
              <select
                className={
                  errors.pais && touched.pais
                    ? "form-control is-invalid"
                    : " form-control"
                }
                id="pais"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Elige...</option>
                <option value="España">España</option>
                <option value="Portugal">Portugal</option>
                <option value="Francia">Francia</option>
              </select>
              <div className="invalid-feedback">Selecciona un país válido.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cp" className="form-label">
                Código postal
              </label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="cp"
                placeholder="CP"
                required=""
                value={values.cp}
              />
              <div
                className={errors.cp && touched.cp ? "invalid-feedback" : ""}
              >
                {errors.cp}
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
            />
            <label className="form-check-label" htmlFor="same-address">
              La dirección de envío es la misma que mi dirección de facturación
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="save-info"
            />
            <label className="form-check-label" htmlFor="save-info">
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
              />
              <label className="form-check-label" htmlFor="credit">
                Tarjeta de crédito
              </label>
            </div>
            <div className="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="debit">
                Tarjeta de débito
              </label>
            </div>
            <div className="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="nombreTarjeta" className="form-label">
                Nombre en la tarjeta
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreTarjeta"
                placeholder="Nombre y Apellidos"
                required=""
                onChange={handleChange}
                value={values.nombreTarjeta}
              />
              <small className="text-muted">
                Nombre completo como se muestra en la tarjeta
              </small>
              <div
                className={
                  errors.nombreTarjeta && touched.nombreTarjeta
                    ? "invalid-feedback"
                    : ""
                }
              >
                {errors.nombreTarjeta}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="numeroTarjeta" className="form-label">
                Número de tarjeta de crédito
              </label>
              <input
                type="number"
                className="form-control"
                id="numeroTarjeta"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required=""
                onChange={handleChange}
                value={values.numeroTarjeta}
              />
              <div
                className={
                  errors.numeroTarjeta && touched.numeroTarjeta
                    ? "invalid-feedback"
                    : ""
                }
              >
                {errors.numeroTarjeta}
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="vencimiento" className="form-label">
                Vencimiento
              </label>
              <input
                type="text"
                className="form-control"
                id="vencimiento"
                placeholder="Caduca en..."
                required=""
                onChange={handleChange}
                value={values.vencimiento}
              />
              <div
                className={
                  errors.vencimiento && touched.vencimiento
                    ? "invalid-feedback"
                    : ""
                }
              >
                {errors.vencimiento}
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="CVV" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="CVV"
                placeholder="***"
                required=""
                onChange={handleChange}
                value={values.CVV}
              />
              <div
                className={errors.CVV && touched.CVV ? "invalid-feedback" : ""}
              >
                {errors.CVV}
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <button
            className="w-100 btn btn-primary btn-lg"
            disabled={isSubmitting}
            type="submit"
          >
            PAGAR
          </button>
        </form>
        <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
      </div>
    </div>
  );
}
