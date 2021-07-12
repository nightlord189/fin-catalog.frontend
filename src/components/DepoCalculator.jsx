/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { observer } from 'mobx-react';
import {
  Form,
} from 'react-bootstrap';
import Decimal from 'decimal.js';
import toFormat from 'toformat';
import MainStore from '../store/main.js';

const DepoCalculator = () => {
  const handleChangeRate = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.rate = e.target.value;
    }
  };

  const handleChangeTerm = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.term = e.target.value;
    }
  };

  const handleChangeCapitalization = (e) => {
    MainStore.calculator.capitalization = e.target.checked;
  };

  const handleChangeAmount = (e) => {
    if (!e.target.validity.badInput) {
      MainStore.calculator.amount = e.target.value;
    }
  };

  toFormat(Decimal);

  return (
    <>
      <h4>Калькулятор</h4>
      <Form>
        <Form.Group controlId="rate">
          <Form.Label>Ставка, %</Form.Label>
          <Form.Control type="number" min={0} value={MainStore.calculator.rate} onChange={handleChangeRate} />
        </Form.Group>
        <Form.Group controlId="term">
          <Form.Label>Срок, месяцев</Form.Label>
          <Form.Control type="number" min={1} value={MainStore.calculator.term} onChange={handleChangeTerm} />
        </Form.Group>
        <Form.Group controlId="capitalization">
          <Form.Check type="checkbox" label="Капитализация" checked={MainStore.calculator.capitalization} onChange={handleChangeCapitalization} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Сумма</Form.Label>
          <Form.Control type="number" min={0} value={MainStore.calculator.amount} onChange={handleChangeAmount} />
        </Form.Group>
        <p>{`Через ${MainStore.calculator.term} месяцев: ${MainStore.depositResult.toFormat(1, { decimalSeparator: '.', groupSeparator: ' ' })}`}</p>
      </Form>
    </>
  );
};

export default observer(DepoCalculator);
