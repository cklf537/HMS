import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import TopHeader from "./components/header/topheader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";
import { Outlet, RouterProvider } from "react-router-dom";
import route from "./routes/routes";
import { Home } from "./components/home/home";

const App = () => {
  const headerMenu = useContext(AppContext);
  return (
    <AppContext.Provider value={headerMenu}>
          <RouterProvider router={route} />
    </AppContext.Provider>
  );
};

export default App;
