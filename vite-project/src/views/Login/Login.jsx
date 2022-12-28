export default function Login() {
  return (
    <>
      <div className="container login-container bg-primary text-white mt-5 mb-5  bg-gradient">
        <div className="row">
          <div className="col-md-6 login-form-1 p-5">
            <h3>Iniciar sesión</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-control mt-5"
                placeholder="Email"
                value=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mt-5"
                placeholder="Contraseña"
                value=""
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-dark mt-5" value="Login" />
              <a href="#" className="btn mt-5">
                Forget Password?
              </a>
            </div>
           
          </div>
          <div className="col-md-6 login-form-1 bg-dark bg-gradient p-5">
            <h3>Registro</h3>

            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value=""
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
                value=""
              />
            </div>


            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value=""
              />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                className="form-control mt-5"
                placeholder="Contraseña"
                value=""
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary mt-5" value="Registro" />
             
             
            </div>
            <div className="form-check text-light mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Acepto la politica de privacidad
                  </label>
                </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
