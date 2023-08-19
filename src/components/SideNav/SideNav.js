import dashboard from "./assets/dashboard.svg";
import NavItem from "./NavItem/NavItem";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="App__SideNav">
      <div className="Nav">
        <NavItem src={dashboard} />
        <NavItem src={dashboard} />
        <NavItem src={dashboard} />
        <NavItem src={dashboard} />
      </div>
    </div>
  );
};

export default SideNav;
