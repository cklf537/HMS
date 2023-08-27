import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { LeftNavigation } from "../components/left-navigation/left-navigation";
import "./root-layout.scss";
import Search from "../components/search/search";
import { SlBell, SlUser, SlMagnifier } from "react-icons/sl";

export default function RootLayout() {
    const navLinks = useContext(AppContext);
    return (<Container className="App" fluid>
        <Row className="header-row">
            <Col md={2}>
                <div className="logo p-3">
                    <h1><NavLink to="/" className="logo-text">MYHAB</NavLink></h1>
                    <h4>Learn, Share & collebrate</h4>
                </div>
            </Col>
            <Col md={10} className="search-notification-wrapper p-3">
                    <SlMagnifier />
                    <SlBell className="h-bell"/>
                    <SlUser className="">Profile</SlUser>
            </Col>
        </Row>
        <Row>
            <Col md={2} className="left-col-bg">
                <LeftNavigation navLinks={navLinks} />
            </Col>
            <Col md={10} className="right-col-bg p-3">
                <Outlet />
            </Col>
        </Row>
    </Container>)
}
