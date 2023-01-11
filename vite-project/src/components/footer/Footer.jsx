export default function Footer() {
  return (
    <>
      <div className="d-flex flex-column h-100 bg-dark">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">CB.</h5>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a className="text-primary" href="#">
                    Bootstrapious.com
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-4">Redes sociales</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="https://www.instagram.com/juam89op/?hl=es" target = "_blank"><i className="fs-3 bi bi-instagram"></i></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/juan.ordonez.315080" target = "_blank"><i className="fs-3 bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/juan-ord%C3%B3%C3%B1ez-p%C3%A9rez-8b9455120/" target = "_blank"><i className="fs-3 bi bi-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/juam89op" target = "_blank"><i className="fs-3 bi bi-twitter"></i></a>
                  </li>
                </ul>
              </div>
             
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Unete a nuertra Newsletter</h5>
               

                <form action="#">
                  <div className="input-group mb-4">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    ><i className="bi bi-send-fill"></i>
                      
                    </button>
                    
                  </div>
                  <div className="form-check text-light">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Acepto la <a href="#" className="link-primary">politica de privacidad</a>
                  </label>
                </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
