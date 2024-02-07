import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/counter"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
            };
          }}
        >
          Counter
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "",
            };
          }}
        >
          Blog
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
