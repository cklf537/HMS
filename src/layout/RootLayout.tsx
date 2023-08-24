import { useContext } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { readFile } from 'node:fs';


export default function RootLayout() {
    const navLinks = useContext(AppContext);
    // console.log(readFile);
    return (<Container fluid>
        <Row>
            <Col md={2} className="left-col-bg">
                <div className="logo p-3 border-bottom">MYHAB</div>
                <nav>
                    <ul>
                        {navLinks && navLinks.map(navItem => <li><Link to={navItem.value}>{navItem.title}</Link></li>)}
                    </ul>
                    {/* <Link to={`/`}>Home</Link>
                    <Link to={`About`}>About</Link> */}
                </nav>
            </Col>
            <Col md={10}>
                <Outlet />
            </Col>
        </Row>
    </Container>)
}