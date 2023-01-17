import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    email: "",
    password: "",
    nombre: "",
    apellidos: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    const loginUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(loginUser);
  }
  const navigate = useNavigate();
  function inicioSesion(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        // alert(`usuario ${user.email} logeado`);
        navigate("/");
      } else {
        alert(`error en el login`);
      }
    });
    setNuevoUsuario({ email: "", password: "" });
  }

  function handleInput(e) {
    const nuevoRegistro = {
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    };
    setNuevoUsuario(nuevoRegistro);
  }

  function registro(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        alert(`usuario ${nuevoUsuario.nombre} registrado correctamente`);
      } else if (response.status === 409) {
        alert("usuario ya registrado");
      }
    });
    setNuevoUsuario({ email: "", password: "", nombre: "", apellidos: "" });
  }

  return (
    <div className="container login-container bg-primary text-white mt-5 mb-5  bg-gradient">
      <div className="row">
        <div className="col-md-6 login-form-1 p-5">
          <h3>Iniciar sesión</h3>
          <form onSubmit={inicioSesion}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control mt-5"
                placeholder="Email"
                onChange={handleLogin}
                value={user.email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control mt-5"
                placeholder="Contraseña"
                onChange={handleLogin}
                value={user.password}
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
          <form onSubmit={registro}>
            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Nombre"
                value={nuevoUsuario.nombre}
                onChange={handleInput}
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
                value={nuevoUsuario.apellidos}
                name="apellidos"
                onChange={handleInput}
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={nuevoUsuario.email}
                name="email"
                onChange={handleInput}
              />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                className="form-control mt-5"
                placeholder="Contraseña"
                value={nuevoUsuario.password}
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary mt-5" />
            </div>
            <div className="form-check text-light mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto la politica de privacidad
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
