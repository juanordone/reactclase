import { useState } from "react";

export default function Login() {
  const [user, SetUser] = useState({ email: "", contrasena: "" });
  function fullLogin(event) {
    event.preventDefault();
    if (
      user.email === "juan.ordonez89@hotmail.es" &&
      user.contrasena === "1234"
    ) {
      alert("logeado con exito");
    }
    SetUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <div className="container login-container bg-primary text-white mt-5 mb-5  bg-gradient">
        <div className="row">
          <div className="col-md-6 login-form-1 p-5">
            <h3>Iniciar sesión</h3>
            <form onSubmit={(event) => fullLogin(event, user)}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control mt-5"
                  placeholder="Email"
                  value={fullLogin.email}
                  onChange={fullLogin}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="contrasena"
                  className="form-control mt-5"
                  placeholder="Contraseña"
                  value={fullLogin.contrasena}
                  onChange={fullLogin}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-dark mt-5">
                  Login
                </button>
                <a href="#" className="btn mt-5">
                  Forget Password?
                </a>
              </div>
            </form>
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
              <input
                type="submit"
                className="btn btn-primary mt-5"
                value="Registro"
              />
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
