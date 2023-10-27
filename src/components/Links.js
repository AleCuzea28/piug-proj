import { Container, Row, Col, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Links = () => {
  return (
    <section className="links" id="links">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Linkuri</h2>
                  <p>
                    Aici puteti vizualiza informatii legate de urmatoarele
                    categorii:
                  </p>
                  <Tab.Container id="links-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col className="tab-component">
                            <a
                              href="https://ac.upt.ro/orare/"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Orar</h2>
                            </a>
                          </Col>
                          <Col className="tab-component">
                            <a
                              href="https://ac.upt.ro/burse/"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Burse</h2>
                            </a>
                          </Col>
                          <Col className="tab-component">
                            <a
                              href="https://cv.upt.ro/login/index.php"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Campus</h2>
                            </a>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="tab-component">
                            <a
                              href="https://ac.upt.ro/examene/"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Examene</h2>
                            </a>
                          </Col>
                          <Col className="tab-component">
                            <a
                              href="https://ac.upt.ro/practica-licenta/"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Practica</h2>
                            </a>
                          </Col>
                          <Col className="tab-component">
                            <a
                              href="https://ac.upt.ro/documente/"
                              style={{
                                color: "#aa367c",
                              }}
                            >
                              <h2> Documente</h2>
                            </a>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
