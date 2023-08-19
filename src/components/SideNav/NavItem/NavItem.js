import "./NavItem.css";
const NavItem = ({ src }) => {
  return (
    <div className="Nav-item">
      <img src={src} alt="#" />
      <p>dashboard</p>
    </div>
  );
};

export default NavItem;
