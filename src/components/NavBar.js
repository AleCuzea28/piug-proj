import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
// import Banner from "react-router-banner";

export const NavBar = (props) => {
  // const [lightTheme, setTheme] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  function handleClick() {
    props.setTheme(!props.lightTheme);
  }

  function handleSearchInput(event) {
    props.setSearchBox(event.target.value);
    console.log(event.target.value);
  }

  function handleSearchClick() {
    console.log("search click");
    const valueToSearch = props.searchBox;
    console.log(valueToSearch);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo AC" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <button className="theme-button" onClick={handleClick}>
              Light/Dark
            </button>
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Acasa
              </Nav.Link>
              <Nav.Link
                href="#links"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("links")}
              >
                Linkuri
              </Nav.Link>
              <Nav.Link
                href="#presentation"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("presentation")}
              >
                Prezentare
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/ac-upt-ro/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://m.facebook.com/profile.php?id=100064193820142">
                  <img src={navIcon2} alt="facebook link" />
                </a>
                <a href="https://www.instagram.com/ac.upt.ro/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <Form inline>
                <Row classname="search-container">
                  <Col xs="auto" className="search-position">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2 search-field"
                      onChange={handleSearchInput}
                      value={props.searchBox}
                    />
                  </Col>
                  <Col xs="auto" className="search-button">
                    <HashLink to="#search">
                      <button className="vvd" onClick={handleSearchClick}>
                        <span>Cauta</span>
                      </button>
                    </HashLink>
                  </Col>
                </Row>
              </Form>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
