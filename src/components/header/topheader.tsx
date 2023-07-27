import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TopHeader = () => {
  const menuItems = useContext(AppContext);
  console.log(menuItems[0].title);
  return (
    <>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.value}>{menu.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TopHeader;
