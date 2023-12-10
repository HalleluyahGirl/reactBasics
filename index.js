// ReactDOM.render(
//   <h1> Hello Everyone, Welcome to React </h1>,
//   document.getElementById("root") // here, we are using the id of the root, adding a text to the root element in index.html
// );

// function Navbar() {
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="Navbar-Brand" href="#">
//       <h1> Banx </h1>{" "}
//     </a>{" "}
//   </nav>;
// }

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="Navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="#navbarSupportedCpntent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navberSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
ReactDOM.render(
  <h1> Hello Everyone, Welcome to React </h1>,
  document.getElementById("root") // here, we are using the id of the root, adding a text to the root element in index.html
);

// render the navber above
ReactDOM.render(
  <div
    className="container"
    style={{
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      justifySelf: "center",
    }}
  >
    <Navbar />,<h1>Hello</h1>
  </div>,
  document.getElementById("nav") // here, we are using the id of the root, adding a text to the root element in index.html
);

// Function MainContent
function MainContent() {
  return <h1>Hello Evidence, your fuirst react page</h1>;
}

function Secon() {
  return <H1>BB London</H1>
}

ReactDOM.render(
  <div style={{ display: "flex", flexDirection: "row" }}>
    <MainContent />
    <Navbar />
    <MainContent />
    <Secon />
  </div>,
  document.getElementById("lel")
);
