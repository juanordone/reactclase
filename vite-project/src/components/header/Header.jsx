import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark px-5 ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to={"/"}>
          Navbar
        </Link>
        
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      
    </nav>
    <ul className="nav nav-pills nav-fill list-group list-group-horizontal">
    <li className="nav-item list-group-item">
      <Link className="nav-link " aria-current="page" to={"/"}>Productos</Link>
    </li>
    <li className="nav-item list-group-item">
    <Link className="nav-link " aria-current="page" to={"/SobreNosotros"}>Sobre nosotros</Link>
    </li>
    <li className="nav-item list-group-item">
    <Link className="nav-link " aria-current="page" to={"/Login"}>Cuenta</Link>
    </li>
    <li className="nav-item list-group-item">
      <Link className="nav-link" to={"/Carrito"}>Carrito</Link>
    </li>
    
  </ul>
    </>
  );
}
