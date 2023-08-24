import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Col, Container, Row } from "react-bootstrap";

const TopHeader = () => {
  const menuItems = useContext(AppContext);
  console.log(menuItems[0].title);
  return (
    <>
    <Row>
      <Col md={1} className="p-2">MYHAB</Col>
      <Col md={11} className="p-2">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.value}>{menu.title}</li>
          ))}
        </ul>
      </Col>
    </Row>
      
    </>
  );
};

export default TopHeader;
