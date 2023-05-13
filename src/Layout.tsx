import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand>Туристическое агенство</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Главная страница
            </NavLink>
            <NavLink
              to={"last_minute_page"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Горячие туры
            </NavLink>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              О нас
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row style={{ marginTop: "10px" }}>
          <Col sm={2} md={2} lg={2}>
            <LeftMenu />
          </Col>
          <Col sm={10} md={10} lg={8}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
