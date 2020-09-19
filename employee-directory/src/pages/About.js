import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/johnsbrook/16_Employee_Directory/master/employee-directory/public/employee.jpg">
        <h1>Employee Directory</h1>
        <h2>Best resources are Human Resources</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To 
              <br></br>
              Intergalactic Human Resources!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>Intergalactic Human Resources is the best search engine of employee profiles within the Intergalactic Realms. May your journey for the best employee begin!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
