import projectImg1 from "../assets/img/hungrium-img.png";
import projectImg2 from "../assets/img/school-finder-img.png";
import projectImg3 from "../assets/img/lms-img.png";
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
            <p className="justify-text">
              I have a solid foundation in both frontend and backend
              development, with hands-on experience building full-stack web
              applications. I am comfortable working with modern frontend
              frameworks to create responsive and user-friendly interfaces, as
              well as backend technologies to design APIs, manage databases, and
              handle application logic. Alongside my full-stack development
              skills, I am currently expanding my knowledge in artificial
              intelligence to enhance my problem-solving approach and build
              smarter, more efficient applications.
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
