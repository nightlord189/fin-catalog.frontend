/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { observer } from 'mobx-react';
import {
  Form,
} from 'react-bootstrap';
import MainStore from '../store/main.js';

const DepoCalculator = () => {
  const handleChangeRate = (e) => {
    MainStore.calculator.rate = e.target.value;
  };

  const handleChangeTerm = (e) => {
    MainStore.calculator.term = e.target.value;
  };

  const handleChangeCapitalization = (e) => {
    MainStore.calculator.term = e.target.value;
  };

  const handleChangeAmount = (e) => {
    MainStore.calculator.amount = e.target.value;
  };

  return (
    <>
      <h4>Калькулятор</h4>
      <Form>
        <Form.Group controlId="rate">
          <Form.Label>Ставка, %</Form.Label>
          <Form.Control type="number" value={MainStore.calculator.rate} onChange={handleChangeRate} />
        </Form.Group>
        <Form.Group controlId="term">
          <Form.Label>Срок, месяцев</Form.Label>
          <Form.Control type="number" min={1} value={MainStore.calculator.term} onChange={handleChangeTerm} />
        </Form.Group>
        <Form.Group controlId="capitalization">
          <Form.Check type="checkbox" label="Капитализация" value={MainStore.calculator.capitalization} onChange={handleChangeCapitalization} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Сумма</Form.Label>
          <Form.Control type="number" value={MainStore.calculator.amount} onChange={handleChangeAmount} />
        </Form.Group>
        <p>{`Через ${12} месяцев: ${MainStore.depositResult}`}</p>
      </Form>
    </>
  );
};

export default observer(DepoCalculator);
