import { NavLink } from "react-router-dom";
import cn from "classnames";

export const Navbar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn("navbar-item", {
      "has-background-grey-lighter": isActive,
    });

  return (
    <nav
      className="navbar is-fixed-top left has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={getLinkClass}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
