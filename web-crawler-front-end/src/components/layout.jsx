import Main from "./main";

const Layout = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>heading will be here</h1>
      </div>
      <div className="left-side-area"></div>
      <Main></Main>
      <div className="right-side-area"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Layout;
