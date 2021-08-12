/* eslint-disable max-len */
import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';

const About = () => (
  <Container className="mt-2" fluid="md">
    <Row>
      <Col>
        <h3>О проекте</h3>
        <p>Проект создан для сравнения и поиска наилучшего предложения для вложения средств в депозиты</p>
      </Col>
    </Row>
  </Container>
);

export default About;
