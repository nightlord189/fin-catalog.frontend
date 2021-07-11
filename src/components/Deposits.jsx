import React from 'react';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { observer } from 'mobx-react';
import MainStore from '../store/main.js';
import DepoCalculator from './DepoCalculator.jsx';

const Deposits = () => (
  <Container className="mt-2" fluid="md">
    <Row>
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Банк</th>
              <th>Название</th>
              <th>Валюта</th>
              <th>Ставка</th>
              <th>Минимальная сумма</th>
              <th>Пополнение</th>
              <th>Частичное снятие</th>
            </tr>
          </thead>
          <tbody>
            {
              MainStore.deposits.map((depo) => (
                <tr key={depo.id}>
                  <td>{depo.bank}</td>
                  <td>{depo.name}</td>
                  <td>{depo.currency}</td>
                  <td>{depo.rate}</td>
                  <td>{depo.minAmount}</td>
                  <td>{depo.replenishment ? 'да' : 'нет'}</td>
                  <td>{depo.partialWithdrawal ? 'да' : 'нет'}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Col>
      <Col xs={3}>
        <DepoCalculator />
      </Col>
    </Row>
  </Container>
);

export default observer(Deposits);
