export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark px-5 ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>
        
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      
    </nav>
    <ul className="nav nav-pills nav-fill list-group list-group-horizontal">
    <li className="nav-item list-group-item">
      <a className="nav-link " aria-current="page" href="#">Active</a>
    </li>
    <li className="nav-item list-group-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item list-group-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item list-group-item">
      <a className="nav-link" href="#">Disabled</a>
    </li>
    <li className="nav-item list-group-item">
      <a className="nav-link" href="#">Disabled</a>
    </li>
  </ul>
    </>
  );
}
