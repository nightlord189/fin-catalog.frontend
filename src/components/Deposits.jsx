import React from 'react';
import {
  Container, Row, Col, Table, Button,
} from 'react-bootstrap';
import { observer } from 'mobx-react';
import MainStore from '../store/main.js';

const Deposits = () => {
  const onAddClick = () => {
    MainStore.addDeposit(
      {
        id: 2,
        name: 'Супер-депозит 2',
        rate: 15.8,
        currency: 'USD',
        minAmount: 20,
      },
    );
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Название</th>
                <th>Ставка</th>
                <th>Валюта</th>
                <th>Минимальная сумма</th>
              </tr>
            </thead>
            <tbody>
              {
              MainStore.deposits.map((depo) => (
                <tr key={depo.id}>
                  <td>{depo.name}</td>
                  <td>{depo.rate}</td>
                  <td>{depo.currency}</td>
                  <td>{depo.minAmount}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col><Button onClick={onAddClick}>Add</Button></Col>
      </Row>
    </Container>
  );
};

export default observer(Deposits);
