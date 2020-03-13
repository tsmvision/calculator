import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Calculator from '../components/Calculator';

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Calculator />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;