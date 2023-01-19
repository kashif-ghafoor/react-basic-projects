const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          Navbar
          <span className="badge rounded-pill bg-secondary m-2">
            {props.length}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
