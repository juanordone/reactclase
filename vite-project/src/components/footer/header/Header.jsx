export default function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark px-5 ">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">
          Navbar
        </a>
        
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      
    </nav>
    <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
    </>
  );
}
