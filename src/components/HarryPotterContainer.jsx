import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class HarryPotterContainer extends Component {
  render() {
    const { movies } = this.props;

    return (
      <Container fluid className="px-0">
        <div>
          <h3 className="text-light">Harry Potter</h3>
        </div>
        <Row className="mb-5 px-0">
          {movies &&
            movies.map(movie => (
              <Col key={movie.imdbID} xs={12} sm={6} md={4} xl={3} className="g-3">
                <Card className="bg-secondary">
                  <Card.Img variant="top" className="cover w-100" src={movie.Poster} alt="Film Cover" />
                  <Card.Body>
                    <Card.Title className="text-light">{movie.Title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default HarryPotterContainer;
