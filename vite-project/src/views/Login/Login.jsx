import { useState } from "react";

export default function Login() {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    email: "",
    password: "",
    nombre: "",
    apellidos: "",
  });

  function handleInput(e){
    const nuevoRegistro = {
      ...nuevoUsuario,
      [e.target.name]: e.target.value
    }
    setNuevoUsuario(nuevoRegistro)
  }

  function registro(e){
    e.preventDefault();
    fetch("http://localhost:3000/user",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    }).then((response)=> {
      console.log(response.status);
      if(response.status === 400){
        alert('error al recibir el body')
      } else if(response.status === 200){
        alert(`usuario ${nuevoUsuario.nombre} registrado correctamente`)
      } else if(response.status === 409){
        alert('usuario ya registrado')
      }
    })
  }

  return (
    <>
      <div className="container login-container bg-primary text-white mt-5 mb-5  bg-gradient">
        <div className="row">
          <div className="col-md-6 login-form-1 p-5">
            <h3>Iniciar sesión</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control mt-5"
                  placeholder="Email"
                  
                  
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="contrasena"
                  className="form-control mt-5"
                  placeholder="Contraseña"
                 
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
                type="text"
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
            {/* <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary mt-5"
                
              />
            </div> */}
            {/* <div className="form-check text-light mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto la politica de privacidad
              </label>
            </div> */}
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}
