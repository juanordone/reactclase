import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark px-5 d-flex  ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold fs-1" to={"/"}>
            CARAMAÑOLA BIKE
          </Link>

          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <Link to={"/carrito"} type="button" className="btn btn-dark position-relative">
          <i className="bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              1
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </nav>
      <ul className="nav nav-pills nav-fill list-group list-group-horizontal">
        <li className="nav-item list-group-item">
          <Link className="nav-link " aria-current="page" to={"/"}>
            Productos
          </Link>
        </li>
        <li className="nav-item list-group-item">
          <Link className="nav-link " aria-current="page" to={"/SobreNosotros"}>
            Sobre nosotros
          </Link>
        </li>
        <li className="nav-item list-group-item">
          <Link className="nav-link " aria-current="page" to={"/Login"}>
            Cuenta
          </Link>
        </li>
       
      </ul>
    </>
  );
}
