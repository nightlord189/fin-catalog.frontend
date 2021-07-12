import React from 'react';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { observer } from 'mobx-react';
import MainStore from '../store/main.js';
import DepoCalculator from './DepoCalculator.jsx';

const Deposits = () => {
  const onDepoClick = (id) => () => {
    const depo = MainStore.deposits.filter((x) => x.id === id)[0];
    MainStore.setCalculator({
      rate: depo.rate,
      term: depo.term,
      amount: MainStore.calculator.amount,
      capitalization: MainStore.calculator.capitalization,
    });
  };

  return (
    <Container className="mt-2" fluid="md">
      <Row>
        <Col sm={8}>
          <h3>Депозиты в банках Казахстана</h3>
          <Table striped bordered hover size="sm" className="w-auto small">
            <thead>
              <tr>
                <th>Банк</th>
                <th>Название</th>
                <th>Валюта</th>
                <th>Ставка</th>
                <th>Срок</th>
                <th>Минимальная сумма</th>
                <th>Пополнение</th>
                <th>Частичное снятие</th>
              </tr>
            </thead>
            <tbody>
              {
              MainStore.deposits.map((depo) => (
                <tr key={depo.id} onClick={onDepoClick(depo.id)}>
                  <td>{depo.bank}</td>
                  <td><a href={depo.link}>{depo.name}</a></td>
                  <td>{depo.currency}</td>
                  <td>{depo.rate}</td>
                  <td>{depo.term}</td>
                  <td>{depo.minAmount}</td>
                  <td>{depo.replenishment ? 'да' : 'нет'}</td>
                  <td>{depo.partialWithdrawal ? 'да' : 'нет'}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </Col>
        <Col sm={4}>
          <DepoCalculator />
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Deposits);
