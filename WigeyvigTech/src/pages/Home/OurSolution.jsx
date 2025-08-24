import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import solutions from '../../data/solutionData';
import { Link } from 'react-router-dom';

const OurSolution = () => {
  return (
    <section style={{ backgroundColor: "#1a1a4b", padding: "60px 0" }}>
            <Container>
              <h2 className="text-center mb-5" style={{ color: "#00bcd4" }}>
                Our Solution
              </h2>
              <Row>
                {solutions.map((solution) => (
                  <Col lg={3} md={6} sm={12} key={solution.id} className="mb-4">
                    <Card className="h-100 shadow-sm rounded text-center">
                      <Card.Body>
                        <div
                          style={{
                            fontSize: "2rem",
                            color: "#00bcd4",
                            marginBottom: "15px",
                          }}
                        >
                          {solution.icon}
                        </div>
                        <Card.Title>{solution.title}</Card.Title>
                        <Card.Text>{solution.description}</Card.Text>
                        <Link to={solution.link} style={{ color: "#00bcd4" }}>
                          →
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
  )
}

export default OurSolution