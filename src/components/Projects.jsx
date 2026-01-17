import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Hungrium",
      description: "Reel Based Food App",
      imgUrl: projectImg1,
    },
    {
      title: "School Finder",
      description: "Web School Finder",
      imgUrl: projectImg2,
    },
    {
      title: "LearniFy",
      description: "LMS",
      imgUrl: projectImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Delectus, nihil?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                defaultActiveKey="/home"
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-item-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-image-right"
        alt="backgroundImg"
      />
    </section>
  );
};
