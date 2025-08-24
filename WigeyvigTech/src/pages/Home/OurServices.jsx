import React from 'react'
import servicesData from '../../data/servicesData'

const OurServices = () => {
  return (
   <section
        id="services-section"
        style={{ backgroundColor: "#1a1a4b", padding: "50px 0" }}
      >
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#00bcd4" }}>
            Our Services
          </h2>
          <Row>
            {featuredServices.map((service) => (
              <Col lg={4} md={6} sm={12} key={service.id} className="mb-4">
                <Card className="h-100 shadow-sm rounded">
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "2rem",
                        color: "#00bcd4",
                        marginBottom: "15px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      {service.points.map((point, index) => (
                        <li
                          key={index}
                          style={{ color: "#00bcd4", marginBottom: "5px" }}
                        >
                          » {point}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/services"
              variant="info"
              style={{ color: "#fff" }}
            >
              More of Our Services →
            </Button>
          </div>
        </Container>
      </section>


  )
}

export default OurServices